module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "plugins": ["@typescript-eslint", "prettier"],
    "env": {
        "browser": true,
        "jasmine": true,
        "jest": true,
        "es6": true
    },
    // "parserOptions": { "ecmaVersion": 10 },
    "rules": {
        "prettier/prettier": ["error", { "singleQuote": true },]
        // 'max-len': [2, { "code": 120 }]
    },
    "parser": "@typescript-eslint/parser"
};