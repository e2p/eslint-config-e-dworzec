// @flow
// Copyright (c) 2015-present, Early2Pay Sp. z o.o. All rights reserved.

module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  plugins: [
    'babel',
    'flowtype',
    'header',
  ],
  rules: {
    curly: [
      2,
      'all',
    ],
    'func-names': 0,
    'header/header': [
      2,
      'line',
      [
        ' @flow',
        ' Copyright (c) 2015-present, Early2Pay Sp. z o.o. All rights reserved.',
      ],
    ],
    'import/no-duplicates': 0, // flow needs to imports types
    'import/no-unresolved': 0, // flow checks this
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-duplicate-imports': 0, // flow needs to import types
    'no-param-reassign': 2,
    'no-restricted-syntax': [
      2,
      'DebuggerStatement',
      // 'ForInStatement', // Flow issues with Object.keys
      'LabeledStatement',
      'WithStatement',
    ],
    'no-shadow': 0,
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'no-unused-vars': [2, { // flow needs argument definitions
      args: 'none',
      vars: 'local',
    }],
    'class-methods-use-this': 0,
    'flowtype/object-type-delimiter': [2, 'comma'],
    'import/newline-after-import': 0,
    'no-await-in-loop': 2,
    'no-prototype-builtins': 0,
    'no-use-before-define': 0,
    'prefer-arrow-callback': 0, // breaks Flow ability to place ? before arguments
    'react/no-multi-comp': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'vars-on-top': 0,
  },
  globals: {
    $Diff: false,
    $Keys: false,
    $Shape: false,
    Class: false,
    ReactClass: false,
    SyntheticDragEvent: false,
    SyntheticEvent: false,
    SyntheticKeyboardEvent: false,
  },
};
