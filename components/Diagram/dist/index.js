import {visit as $hCgyA$visit} from "unist-util-visit";
import $hCgyA$puppeteer from "puppeteer";
import $hCgyA$nodepath from "node:path";
import $hCgyA$nodefspromises from "node:fs/promises";
import {cwd as $hCgyA$cwd} from "process";






async function $4caa44378d385ef8$export$2e2bcd8739ae039({ config: config , code: code  }) {
    const browser = await (0, $hCgyA$puppeteer).launch({
        args: [
            "--no-sandbox"
        ]
    });
    const page = await browser.newPage();
    const content = await (0, $hCgyA$nodefspromises).readFile((0, $hCgyA$nodepath).join($hCgyA$cwd(), "node_modules/mermaid/dist/mermaid.js"), "utf8");
    await page.addScriptTag({
        content: content
    });
    const result = await page.evaluate((configB, codeB)=>{
        // FIXME: `window.mermaid` global browser stubbing
        window.mermaid.initialize(configB);
        try {
            /* Render the mermaid diagram */ const svgCode = window.mermaid.mermaidAPI.render("diagram", codeB);
            return {
                status: "success",
                svgCode: svgCode
            };
        } catch (error) {
            return {
                status: "error",
                error: error,
                message: error.message
            };
        }
    }, config, code);
    await browser.close();
    if (result.status === "success" && typeof result.svgCode === "string") return result.svgCode;
    return false;
}


const $5d4dc991ee2641c2$var$style = `display: flex; justify-content: center; width: 100%;`;
function $5d4dc991ee2641c2$var$plugin() {
    return async function transformer(ast) {
        // Find all the mermaid diagram code blocks. i.e. ```mermaid
        const instances = [];
        (0, $hCgyA$visit)(ast, {
            type: "code",
            lang: "mermaid"
        }, (node, index, parent)=>{
            instances.push([
                node,
                index,
                parent
            ]);
        });
        // Replace each Mermaid code block with the server-side rendered SVG
        await Promise.all(instances.map(async ([node, index, parent])=>{
            // MDX rendering seems to be already cached.
            // or this keep running puppeeter ?
            // Also, disabling it prevent a bug which doesn't
            // occur in the regular component.
            const html = await (0, $4caa44378d385ef8$export$2e2bcd8739ae039)({
                config: {},
                code: node.value
            }).then((diagram)=>diagram);
            parent.children.splice(index, 1, {
                type: "html",
                // TODO: put CSS elsewhere
                value: `<div style="${$5d4dc991ee2641c2$var$style}">${html}</div>`,
                position: node.position
            });
        }));
        return ast;
    };
}
var $5d4dc991ee2641c2$export$2e2bcd8739ae039 = $5d4dc991ee2641c2$var$plugin;


var $c3f6c693698dc7cd$export$2e2bcd8739ae039 = (0, $5d4dc991ee2641c2$export$2e2bcd8739ae039);


export {$c3f6c693698dc7cd$export$2e2bcd8739ae039 as default};
//# sourceMappingURL=index.js.map
