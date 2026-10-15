module.exports = {
    root: true,
    env: {
        browser: true,
        es2021: true,
        "vue/setup-compiler-macros": true
    },
    extends: [
        "standard",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:vue/essential",
        "plugin:vue/vue3-recommended"
    ],
    parser: "vue-eslint-parser",
    parserOptions: {
        ecmaVersion: 12,
        sourceType: "module",
        parser: "@typescript-eslint/parser"
    },
    plugins: [
        "@typescript-eslint",
        "vue"
    ],
    rules: {
        indent: "off", // ["error", 4, { SwitchCase: 1 }],
        "@typescript-eslint/indent": "off", // ["error", 4],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        eqeqeq: "off",
        "vue/script-setup-uses-vars": "error",
        "max-len": ["off", {code: 100}],
        "valid-jsdoc": "off",
        "require-jsdoc": "off",
        "linebreak-style": "off",
        "import/no-unresolved": 0,
        "brace-style": ["error", "allman"],
        "operator-linebreak": ["error", "before", {overrides: {"=": "after"}}],
        curly: ["error", "multi-or-nest", "consistent"],
        "vue/html-indent": ["warn", 4, {
            attribute: 1,
            baseIndent: 1,
            closeBracket: 0,
            alignAttributesVertically: true,
            ignores: []
        }],
        "padded-blocks": ["error", "never"],
        "vue/multi-word-component-names": ["warn"]
    },
    ignorePatterns: [
        "/node_modules/**/*",
        "/dist/**/*",
    ]
};
