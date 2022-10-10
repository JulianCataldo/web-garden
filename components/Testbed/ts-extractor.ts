import { Project, SyntaxKind, type SourceFile } from 'ts-morph';

/* —————————————————————————————————————————————————————————————————————————— */

function getDefaults(sourceFile: SourceFile, isAstro: boolean) {
  const defaults: Record<string, string> = {};

  if (isAstro) {
    sourceFile.getVariableStatements().forEach((vars) => {
      vars.getDeclarationList().forEachChild((decls) => {
        decls.getChildrenOfKind(SyntaxKind.AsExpression).forEach((exprs) => {
          const isAstroProps = [false, false];
          exprs
            .getExpressionIfKind(SyntaxKind.PropertyAccessExpression)
            .forEachChild((propAcc) => {
              if (propAcc?.getText() === 'Astro') {
                isAstroProps[0] = true;
              }
              if (propAcc?.getText() === 'props') {
                isAstroProps[1] = true;
              }
            });
          if (isAstroProps[0] && isAstroProps[1]) {
            decls
              .getChildrenOfKind(SyntaxKind.ObjectBindingPattern)
              .forEach((objBind) => {
                objBind.forEachChild((obChild) => {
                  obChild.forEachChild((obSubChild) => {
                    if (obSubChild.isKind(SyntaxKind.Identifier)) {
                      const name = obSubChild?.getText();
                      obChild.forEachChild((obSubSubChild) => {
                        if (!obSubSubChild.isKind(SyntaxKind.Identifier)) {
                          defaults[name] = obSubSubChild?.getText() || '';
                        }
                      });
                    }
                  });
                });
              });
          }
        });
      });
    });
  } else {
    /* React JSX */
    sourceFile.getFunctions().forEach((d) => {
      if (d.getDefaultKeyword()) {
        d.getParameters().forEach((dddd) => {
          dddd.getNameNode().forEachChild((fff) => {
            if (fff.isKind(SyntaxKind.BindingElement)) {
              defaults[fff.getName()] = fff?.getInitializer()?.getText();
            }
          });
        });
      }
    });
  }
  return defaults;
}

export function getInfos(
  // project: Project,
  component: string,
  componentRaw: string,
  isAstro: boolean,
) {
  const project = new Project({ useInMemoryFileSystem: true });
  const sourceFile = project.createSourceFile(
    component,
    isAstro ? componentRaw.split('---')[1] : componentRaw,
  );
  const defaults = getDefaults(sourceFile, isAstro);

  const propsIface = sourceFile.getInterface('Props');
  return {
    heritage: propsIface.getHeritageClauses().map((u) => ({
      name: u.getText(),
    })),

    defaults,

    props: propsIface?.getProperties().map((u) => ({
      name: u.getName(),
      docs: u?.getJsDocs()?.map((e) => e.getCommentText())[0],
      type: u.getType().getText(),
      required: u.hasQuestionToken(),
    })),
  };
}
