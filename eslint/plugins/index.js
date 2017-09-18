const getPropertyName = require('./ast-utils').getStaticPropertyName;

module.exports.rules = {
    'no-escape': {
        meta: {
            fixable: 'code'
        },

        report(context, node) {
            context.report({
                node,
                message: `禁止使用escape方法，请用encodeURIComponent代替`,
                fix: fixer => {
                    if (node.callee.property && node.callee.property.name === 'escape') {
                        return fixer.replaceTextRange(node.callee.property.range, 'encodeURIComponent');
                    } else if (node.callee.name === 'escape') {
                        return fixer.replaceTextRange(node.callee.range, 'encodeURIComponent');
                    }
                    return null;
                }
            });
        },

        findReference(scope, node) {
            const references = scope.references.filter(reference => reference.identifier.range[0] === node.range[0] &&
                    reference.identifier.range[1] === node.range[1]);
        
            if (references.length === 1) {
                return references[0];
            }
            return null;
        },

        isShadowed(scope, globalScope, node) {
            const reference = this.findReference(scope, node);
        
            return reference && reference.resolved && reference.resolved.defs.length > 0;
        },

        isProhibitedIdentifier(name) {
            return /^escape$/.test(name);
        },

        isGlobalThisReferenceOrGlobalWindow(scope, globalScope, node) {
            if (scope.type === "global" && node.type === "ThisExpression") {
                return true;
            } else if (node.name === "window") {
                return !this.isShadowed(scope, globalScope, node);
            }
            return false;
        },

        create(context) {
            let globalScope;
            const self = this;
            return {

                Program() {
                    globalScope = context.getScope();
                },

                CallExpression(node) {
                    const callee = node.callee,
                        currentScope = context.getScope();

                    // without window.
                    if (callee.type === "Identifier") {
                        const identifierName = callee.name;

                        if (!self.isShadowed(currentScope, globalScope, callee) && self.isProhibitedIdentifier(callee.name)) {
                            self.report(context, node, identifierName);
                        }

                    } else if (callee.type === "MemberExpression" && self.isGlobalThisReferenceOrGlobalWindow(currentScope, globalScope, callee.object)) {
                        const identifierName = getPropertyName(callee);

                        if (self.isProhibitedIdentifier(identifierName)) {
                            self.report(context, node, identifierName);
                        }
                    }
                }
            };
        }
    }
};
