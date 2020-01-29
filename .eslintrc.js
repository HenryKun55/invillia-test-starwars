module.exports = {
    env: {
        "browser": true,
        "es6": true
    },
    extends: [
        "plugin:react/recommended",
        'plugin:@typescript-eslint/recommended',
        "airbnb"
    ],
    globals: {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    plugins: [
        "react",
        "@typescript-eslint"
    ],
    rules: {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx", ".ts", ".tsx"] }],
        "import/extensions": [
            "error",
            "ignorePackages",
            {
              "js": "never",
              "jsx": "never",
              "ts": "never",
              "tsx": "never"
            }
        ],
        "@typescript-eslint/interface-name-prefix": 0,
        "@typescript-eslint/camelcase": ["error", { "properties": "never" } ]
    },
    settings: {
        "import/resolver": {
            "node": {
              "extensions": [
                ".js",
                ".jsx",
                ".ts",
                ".tsx"
              ]
            }
          }
    }
};
