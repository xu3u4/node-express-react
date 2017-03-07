module.exports = {
    "env": {
        "browser": true,
        "es6": true,
        "node": true,
        "mocha": true
    },
    "extends": ["airbnb", "plugin:react/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "new-cap": 0,
        "no-console": 0,
        "no-param-reassign": 0,
        "import/no-unresolved": 0,
        "no-underscore-dangle": 0,
        "comma-dangle":0,
        "import/extensions": 0,
        "arrow-body-style": ["error", "as-needed"]
    }
};