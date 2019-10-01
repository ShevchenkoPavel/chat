module.exports = {
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended"
    ],
    "plugins": ["react", "@typescript-eslint", "prettier", "react-hooks"],
    "env": {
        "browser": true,
        "jasmine": true,
        "jest": true,
        "es6": true
    },
    // "parserOptions": { "ecmaVersion": 10 },
    "rules": {
        "prettier/prettier": ["error", { "singleQuote": true },],
        "react-hooks/rules-of-hooks": "error",
        "react-hooks/exhaustive-deps": "warn",
        // 'max-len': [2, { "code": 120 }]
    },
    "settings": {
        "react": {
            "pragma": "React",
            "version": "detect"
        }
    },
    "parser": "@typescript-eslint/parser"
};