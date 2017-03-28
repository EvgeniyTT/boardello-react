/* eslint quotes: ["warn", "double"], quote-props: false */

module.exports = {
  // I want to use babel-eslint for parsing!
  "parser": "babel-eslint",
  "plugins": [
    "react",
  ],
  "settings": {
    "import/resolver": "webpack",
  },
  // enforce recommended jsx rules
  // see: <https://github.com/airbnb/javascript/blob/master/packages/eslint-config-airbnb/rules/style.js>
  // see: <https://github.com/yannickcr/eslint-plugin-react#user-content-recommended-configuration>
  "extends": ["airbnb-base", "plugin:react/recommended"],
  "env": {
    // I write for browser
    "browser": true,
    // in CommonJS
    "node": true,
    "es6": true,
    // for tests files
    "mocha": true
  },
  "globals": {
    // defined by webpack
    "SITE": true,
    "NODE_ENV": true
  },
  "rules": {
    // disable import rules for now, until we update eslint
    "import/no-duplicates": 0,
    "import/no-named-as-default": 0,
    "import/no-named-as-default-member": 0,

    // our specific rules
    "arrow-parens": [2, "as-needed"],
    "arrow-spacing": 2,
    "block-scoped-var": 2,
    "comma-dangle": [2, "always-multiline"],
    "dot-notation": 2,
    "eqeqeq": 2,
    "no-iterator": 2,
    "no-mixed-requires": [0],
    "no-unused-vars": 1,
    "no-var": 2,
    "object-shorthand": 2,
    "prefer-arrow-callback": 2,
    "prefer-template": 1,
    "no-empty-function": [2, { "allow": ["arrowFunctions"] }],

    // our overrides for imported rules
    "quotes": [2, "single"],
    "semi": [2, "never"],
    "eol-last": [0],
    "indent": [2, 2, {
      "SwitchCase": 1,
      "VariableDeclarator": 1,
      "outerIIFEBody": 1,
      "MemberExpression": 1
    }],
    "func-call-spacing": [1, "never"],
    "object-curly-newline": [0],
    "max-len": [1, 100, 2, {
      "ignoreUrls": true,
      "ignoreComments": false
    }],
    "one-var": [0],
    "no-param-reassign": [0],
    "new-cap": [2, { "capIsNew": false }],
    "quote-props": [2, "as-needed", {
      "keywords": false, "unnecessary": true, "numbers": false
    }],
    "newline-after-var": 2,
    "no-confusing-arrow": [1, {"allowParens": true}],
    "no-warning-comments": [1, { "location": "anywhere" }],
    "no-underscore-dangle": [1, { "allowAfterThis": true }],
    'no-restricted-syntax': [2, "DebuggerStatement", "LabeledStatement", "WithStatement"],
    "no-bitwise": 2,
    "no-mixed-operators": 0,
    "no-continue": 0,

    // disable edit-time import errors (false positive)
    "import/no-unresolved": 0,
    "import/no-extraneous-dependencies": 0,
    "import/newline-after-import": 0,
    "import/prefer-default-export": 1,

    // JSX
    "react/jsx-indent": [1, 2],
    "react/display-name": 0,
    "react/jsx-no-duplicate-props": 2,
    "react/jsx-no-undef": 2, // Disallow undeclared variables in JSX
    "react/no-deprecated": 1,
    "react/no-unknown-property": 2, // Prevent usage of unknown DOM property
    "react/no-did-mount-set-state": 2, // Prevent usage of setState in componentDidMount
    "react/no-did-update-set-state": 2, // Prevent usage of setState in componentDidUpdate
    "react/jsx-wrap-multilines": 2, // Prevent missing parentheses around multilines JSX
    "react/prop-types": [1, {"ignore": ["dispatch"]}],
    "react/prefer-es6-class": 1,
    "react/jsx-curly-spacing": [0, "always"],
    "react/jsx-handler-names": 2,
    "react/jsx-equals-spacing": [2, "never"],
    "react/jsx-space-before-closing": [2, "always"],
    "react/jsx-pascal-case": [2, { allowAllCaps: true }],
    "react/jsx-indent-props": [2, 2 /* spaces */],
    "react/jsx-first-prop-new-line": [2, "multiline"],
    "react/sort-comp": [1, {
      order: [
        "static-methods",
        "constructor",
        "fetchData", // keep generic fetchData method high
        "lifecycle",
        "everything-else",
        "/^handle.+$/",
        "renderFunctions"
      ],
      groups: {
        lifecycle: [
          "displayName",
          "propTypes",
          "contextTypes",
          "childContextTypes",
          "mixins",
          "statics",
          "defaultProps",
          "constructor",
          "getDefaultProps",
          "getInitialState",
          "state",
          "getChildContext",
          "componentWillMount",
          "componentDidMount",
          "componentWillReceiveProps",
          "shouldComponentUpdate",
          "componentWillUpdate",
          "componentDidUpdate",
          "componentWillUnmount"
        ],
        renderFunctions: [
          "/^render.+$/",
          "render"
        ]
      }
    }]
  }
}
