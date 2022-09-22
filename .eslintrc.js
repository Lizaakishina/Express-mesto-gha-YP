module.exports = {
  "env": {
    "browser": false,
    "node": true,
    "mongo": true,
    "es6": true
  },
  "extends": "eslint:recommended",
  "overrides": [],
  "parserOptions": {
    "ecmaVersion": "latest"
  },
  "rules": {
    "no-underscore-dangle": [
      "error",
      { "allow": ["_id"] }
    ]
  }
}
