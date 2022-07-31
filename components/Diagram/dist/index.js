import {visit as $hCgyA$visit} from "unist-util-visit";
import $hCgyA$headlessmermaid from "headless-mermaid";



async function $4caa44378d385ef8$export$2e2bcd8739ae039({ config: config , code: code  }) {
    /* Render the mermaid diagram */ const result = await await (0, $hCgyA$headlessmermaid)// NOTE: Fetching mermaid from CDN isn't ideal, should use NPM package?
    .execute(code, config, "mermaid.min@9.1.3").then((r)=>r).catch((e)=>{
        // eslint-disable-next-line no-console
        console.log(e);
        return false;
    });
    if (result) return {
        code: code,
        config: config,
        result: result
    };
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
            }).then((diagram)=>diagram.result);
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
