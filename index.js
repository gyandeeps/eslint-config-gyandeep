module.exports = {
    "rules": {
        "no-alert": 2,
        "no-array-constructor": 2,
        "no-bitwise": 0,
        "no-caller": 2,
        "no-catch-shadow": 2,
        "no-comma-dangle": 0,
        "no-cond-assign": 2,
        "no-console": 2,
        "no-constant-condition": 2,
        "no-continue": 0,
        "no-control-regex": 2,
        "no-debugger": 2,
        "no-delete-var": 2,
        "no-div-regex": 0,
        "no-dupe-keys": 2,
        "no-dupe-args": 2,
        "no-duplicate-case": 2,
        "no-else-return": 0,
        "no-empty": 2,
        "no-empty-class": 2,
        "no-empty-label": 2,
        "no-eq-null": 2,
        "no-eval": 2,
        "no-ex-assign": 2,
        "no-extend-native": 2,
        "no-extra-bind": 2,
        "no-extra-boolean-cast": 2,
        "no-extra-parens": 0,
        "no-extra-semi": 2,
        "no-extra-strict": 2,
        "no-fallthrough": 2,
        "no-floating-decimal": 2,
        "no-func-assign": 2,
        "no-implied-eval": 2,
        "no-inline-comments": 0,
        "no-inner-declarations": [2, "functions"],
        "no-invalid-regexp": 2,
        "no-irregular-whitespace": 2,
        "no-iterator": 2,
        "no-label-var": 2,
        "no-labels": 2,
        "no-lone-blocks": 2,
        "no-lonely-if": 1,
        "no-loop-func": 2,
        "no-mixed-requires": [0, false],
        "no-mixed-spaces-and-tabs": [2, false],
        "linebreak-style": [0, "unix"],
        "no-multi-spaces": 2,
        "no-multi-str": 2,
        "no-multiple-empty-lines": [2, {
            "max": 2
        }],
        "no-native-reassign": 2,
        "no-negated-in-lhs": 2,
        "no-nested-ternary": 2,
        "no-new": 2,
        "no-new-func": 2,
        "no-new-object": 2,
        "no-new-require": 0,
        "no-new-wrappers": 2,
        "no-obj-calls": 2,
        "no-octal": 2,
        "no-octal-escape": 2,
        "no-param-reassign": 0,
        "no-path-concat": 0,
        "no-plusplus": 0,
        "no-process-env": 0,
        "no-process-exit": 2,
        "no-proto": 2,
        "no-redeclare": 2,
        "no-regex-spaces": 2,
        "no-reserved-keys": 0,
        "no-restricted-modules": 0,
        "no-return-assign": 2,
        "no-script-url": 2,
        "no-self-compare": 0,
        "no-sequences": 2,
        "no-shadow": 2,
        "no-shadow-restricted-names": 2,
        "no-space-before-semi": 0,
        "no-spaced-func": 2,
        "no-sparse-arrays": 2,
        "no-sync": 0,
        "no-ternary": 0,
        "no-trailing-spaces": 0,
        "no-throw-literal": 0,
        "no-undef": 2,
        "no-undef-init": 2,
        "no-undefined": 2,
        "no-underscore-dangle": 2,
        "no-unneeded-ternary": 2,
        "no-unreachable": 2,
        "no-unused-expressions": 2,
        "no-unused-vars": [2, {
            "vars": "all",
            "args": "after-used"
        }],
        "no-use-before-define": 0,
        "no-void": 0,
        "no-var": 0,
        "no-warning-comments": [0, {
            "terms": ["todo", "fixme", "xxx"],
            "location": "start"
        }],
        "no-with": 2,
        "no-wrap-func": 2,

        "block-scoped-var": 0,
        "brace-style": [2, "stroustrup"],
        "camelcase": 2,
        "comma-dangle": [2, "never"],
        "comma-spacing": 2,
        "comma-style": [2, "last"],
        "complexity": [0, 11],
        "computed-property-spacing": 2,
        "consistent-return": 2,
        "consistent-this": [2, "self"],
        "curly": [2, "all"],
        "default-case": 2,
        "dot-location": 0,
        "dot-notation": [2, {
            "allowKeywords": true
        }],
        "eol-last": 1,
        "eqeqeq": 2,
        "func-names": 0,
        "func-style": [0, "declaration"],
        "generator-star": 0,
        "generator-star-spacing": 0,
        "global-strict": [2, "never"],
        "guard-for-in": 0,
        "handle-callback-err": 0,
        "indent": [2, 4, {
            "indentSwitchCase" : true
        }],
        "key-spacing": [2, {
            "beforeColon": false,
            "afterColon": true
        }],
        "max-depth": [0, 4],
        "max-len": [0, 80, 4],
        "max-nested-callbacks": [0, 2],
        "max-params": [0, 3],
        "max-statements": [0, 10],
        "new-cap": 2,
        "new-parens": 2,
        "newline-after-var": 1,
        "object-shorthand": 0,
        "one-var": 0,
        "operator-assignment": [0, "always"],
        "operator-linebreak": 0,
        "padded-blocks": 0,
        "prefer-const": 0,
        "quote-props": 0,
        "quotes": [2, "double"],
        "radix": 1,
        "semi": 2,
        "semi-spacing": [2, {
            "before": false,
            "after": true
        }],
        "sort-vars": 0,
        "space-after-function-name": [0, "never"],
        "space-before-function-parentheses": [0, "always"],
        "space-in-brackets": [2, "never"],
        "space-in-parens": [2, "never"],
        "space-infix-ops": 2,
        "space-return-throw-case": 2,
        "space-unary-ops": [2, {
            "words": true,
            "nonwords": false
        }],
        "spaced-comment": 0,
        "spaced-line-comment": [0, "always"],
        "space-after-keywords": [2, "never"],
        "space-before-blocks": [2, "never"],
        "space-before-function-paren": [2, {
            "anonymous": "never",
            "named": "never"
        }],
        "strict": 2,
        "use-isnan": 2,
        "valid-jsdoc": [2, {
            "prefer": {
                "return": "returns"
            },
            "requireReturn": true,
            "requireParamDescription": true
        }],
        "valid-typeof": 2,
        "vars-on-top": 2,
        "wrap-iife": 0,
        "wrap-regex": 0,
        "yoda": [2, "never"]
    }
};
