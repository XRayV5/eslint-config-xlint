# eslint-config-xlint
Eslint config of Dev XRay to share
```
{
  "extends": "eslint-config-airbnb",
  "rules": {
    // Semicolon-less React development
    "semi": [2, "never"],
    // Use single quote wherever applicable
    "singleQuote": true,
    // Avoid declare unnecessary variables, whereas placeholder args for functions are accesptable
    "no-unused-vars": [ 'warn', { "vars": "local", args: "none" } ],
    // A function can have maximum five arguments, please refactor or use object literals if more args are needed
    "max-params": [2, 5],
    // The body of a function should not exceed the length of fifty lines, please refactor if it does require. 
    "max-statements": [2, 50],
    "jsxBracketSameLine": true,
    "firstAttributeOnSameLine": true,
    // Specification of prop-types of a component is optional
    "react/prop-types": 0,
    // JSX tags can be used in files of both extensions
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    // It is recommended to bind the method inside class component constructors
    "react/jsx-no-bind": "warn"
  },
  "env": {
    // The above rules can only be applied to frontend development.
    // For node development, developer's discretion is advised. 
    "browser": true,
    "es6": true
  }
}
```
