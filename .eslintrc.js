/* eslint-disable max-lines */
module.exports = {
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      impliedStrict: true,
      experimentalObjectRestSpread: true
    }
  },
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    node: true
  },
  plugins: ['jsdoc', 'node', 'promise'],
  extends: 'eslint:all',
  rules: {
    // http://eslint.org/docs/rules/

    // possible errors
    'no-cond-assign': [2, 'always'],
    'no-console': [1, {allow: ['warn', 'error']}],
    'no-debugger': 1,
    'no-empty': [1, {allowEmptyCatch: true}],
    'no-extra-parens': 1,
    'no-extra-semi': 1,
    'no-invalid-regexp': [2, {allowConstructorFlags: ['u', 'y']}],
    'no-irregular-whitespace': [2, {
      skipStrings: false,
      skipComments: false,
      skipRegExps: false,
      skipTemplates: false
    }],
    // todo: use eslint-plugin-jsdoc instead of valid-jsdoc.
    // https://github.com/gajus/eslint-plugin-jsdoc/issues/14
    'valid-jsdoc': [1, {requireReturn: true, requireParamDescription: false,
       requireReturnDescription: false}],

    // best practices
    'accessor-pairs': 1,
    complexity: [1, 8], // eslint-disable-line no-magic-numbers
    curly: [2, 'multi-line'],
    'default-case': 1,
    'dot-location': [1, 'property'],
    'dot-notation': 1,
    eqeqeq: [2, 'smart'],
    'no-alert': 1,
    'no-caller': 1,
    'no-div-regex': 0,
    'no-else-return': 1,
    'no-empty-function': 1,
    'no-floating-decimal': 1,
    'no-lone-blocks': 1,
    'no-magic-numbers': [1, {ignore: [-1, 0, 1, 2], enforceConst: true}],
    'no-multi-spaces': 1,
    'no-new-wrappers': 1,
    'no-param-reassign': 1,
    'no-return-assign': [2, 'always'],
    'no-script-url': 1,
    'no-unused-expressions': 1,
    'no-unused-labels': 1,
    'no-useless-concat': 1,
    'no-warning-comments': 0,
    radix: [1, 'always'],
    'vars-on-top': 1,
    'wrap-iife': 0,
    yoda: 1,

    // strict mode
    strict: [2, 'never'],

    // variables
    'init-declarations': 0,
    'no-undef-init': 1,
    'no-undef': [2, {typeof: true}],
    'no-unused-vars': [1, {args: 'all', caughtErrors: 'all',
      argsIgnorePattern: '^_'}],
    'no-use-before-define': [2, 'nofunc'],

    // node.js and commonjs
    'callback-return': [2, ['cb']],
    'global-require': 1,
    'no-mixed-requires': [1, {grouping: true}],
    'no-path-concat': 1,
    'no-process-exit': 1,
    'no-sync': 1,

    // stylistic issues
    'array-bracket-spacing': 1,
    'block-spacing': 1,
    'brace-style': 1,
    camelcase: 1,
    'comma-dangle': [1, 'never'],
    'comma-spacing': 1,
    'comma-style': 1,
    'computed-property-spacing': 1,
    'consistent-this': 1,
    'eol-last': 0,
    'func-call-spacing': 1,
    'func-names': [1, 'never'],
    'func-style': [1, 'declaration'],
    'id-length': [1, {min: 1, max: 40}],
    'id-match': [1, '^[a-z]+([A-Za-z]+)*'],
    indent: [1, 2],
    'jsx-quotes': [1, 'prefer-single'],
    'key-spacing': 1,
    'keyword-spacing': 1,
    'linebreak-style': 1,
    'lines-around-comment': 0,
    'max-depth': 1,
    'max-len': [1, {tabWidth: 2, ignoreUrls: true, ignorePattern: '^/// .+'}],
    'max-lines': [1, {max: 150, skipBlankLines: false, skipComments: false}],
    'max-nested-callbacks': [1, {max: 4}],
    'max-params': [1, 4], // eslint-disable-line no-magic-numbers
    'max-statements-per-line': 1,
    'max-statements': [1, {max: 20}],
    'multiline-ternary': 0,
    'new-cap': 1,
    'new-parens': 1,
    'newline-after-var': 0,
    'newline-before-return': 0,
    'newline-per-chained-call': 1,
    'no-array-constructor': 1,
    'no-bitwise': 1,
    'no-continue': 1,
    'no-inline-comments': 0,
    'no-lonely-if': 1,
    'no-mixed-operators': 0,
    'no-mixed-spaces-and-tabs': 1,
    'no-multiple-empty-lines': [1, {max: 2, maxEOF: 0, maxBOF: 0}],
    'no-negated-condition': 1,
    'no-nested-ternary': 1,
    'no-new-object': 1,
    'no-plusplus': 0,
    'no-tabs': 1,
    'no-ternary': 0,
    'no-trailing-spaces': 1,
    'no-underscore-dangle': [1, {allowAfterThis: true, allowAfterSuper: false}],
    'no-unneeded-ternary': 1,
    'no-whitespace-before-property': 1,
    'object-curly-newline': 0,
    'object-curly-spacing': 1,
    'object-property-newline': 0,
    'one-var-declaration-per-line': 0,
    'one-var': [1, {var: 'always', let: 'always', const: 'always'}],
    'operator-assignment': 1,
    'operator-linebreak': [1, 'before'],
    'padded-blocks': [1, 'never'],
    'quote-props': [1, 'as-needed'],
    quotes: [1, 'single', {avoidEscape: true}],
    'require-jsdoc': [1, {require: {MethodDefinition: true}}],
    'semi-spacing': 1,
    semi: [1, 'never'],
    'sort-keys': 0,
    'sort-vars': 0,
    'space-before-blocks': 1,
    'space-before-function-paren': [1, 'never'],
    'space-in-parens': [1, 'never'],
    'space-infix-ops': 1,
    'space-unary-ops': 1,
    'spaced-comment': [1, 'always', {markers: ['/']}],
    'unicode-bom': 1,
    'wrap-regex': 0,

    // ecmascript 6
    'arrow-body-style': 1,
    'arrow-parens': [1, 'as-needed'],
    'arrow-spacing': 1,
    'generator-star-spacing': 1,
    'no-confusing-arrow': [2, {allowParens: true}],
    'no-duplicate-imports': 1,
    'no-useless-computed-key': 1,
    'no-useless-constructor': 1,
    'no-useless-rename': 1,
    'no-var': 1,
    'object-shorthand': 1,
    'prefer-arrow-callback': 1,
    'prefer-const': 1,
    'prefer-reflect': 1,
    'prefer-rest-params': 1,
    'prefer-spread': 1,
    'prefer-template': 1,
    'rest-spread-spacing': 1,
    'sort-imports': 1,
    'template-curly-spacing': 1,
    'yield-star-spacing': 1,

    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-rules
    'jsdoc/check-param-names': 1,
    'jsdoc/check-tag-names': 1,
    'jsdoc/check-types': 1,
    'jsdoc/newline-after-description': [1, 'never'],
    'jsdoc/require-description-complete-sentence': 1,
    'jsdoc/require-param-type': 1,
    'jsdoc/require-returns-type': 1,

    // https://www.npmjs.com/package/eslint-plugin-node#rules
    'node/no-deprecated-api': 2,
    'node/no-missing-import': 2,
    'node/no-missing-require': 2,
    'node/no-unpublished-import': 2,
    'node/no-unpublished-require': 2,
    'node/no-unsupported-features': [2, {version: 6}],
    'node/process-exit-as-throw': 2,
    'node/shebang': 2,

    // https://www.npmjs.com/package/eslint-plugin-promise#rule
    'promise/catch-or-return': 2,
    'promise/always-return': 2,
    'promise/param-names': 2,
    'promise/no-native': 2
  },
  settings: {
    // https://www.npmjs.com/package/eslint-plugin-jsdoc#eslint-plugin-jsdoc-settings-alias-preference
    jsdoc: {
      // pick one synonym for each ambiguity listed.
      // http://usejsdoc.org/#block-tags
      tagNamePreference: {
        abstract: 'virtual',
        augments: 'extends',
        constructor: 'class',
        constant: 'const',
        defaultvalue: 'default',
        description: 'desc',
        host: 'external',
        fileoverview: 'file',
        overview: 'file',
        fires: 'emits',
        function: 'func',
        method: 'func',
        member: 'var',
        param: 'arg',
        argument: 'arg',
        property: 'prop',
        returns: 'return',
        exception: 'throws',
        linkcode: 'link',
        linkplain: 'link'
      }
    }
  }
}