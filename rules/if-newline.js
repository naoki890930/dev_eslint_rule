"use strict";

module.exports = {
  meta: {
      docs: {
          description: "Styles of if statement",
          category: "Stylistic Issues",
          recommended: true
      },
      fixable: "code",
      schema: [] // no options
  },

  create: context => {
    return {
      IfStatement: node => {
        if (node.consequent.loc.start.line === node.consequent.loc.end.line) {
          context.report({
            node: node,
            message: "You must make a new line when use if statement.",
          })
        }
      }
    }
  }
}
