// @flow
// Copyright (c) 2015-present, Early2Pay Sp. z o.o. All rights reserved.

module.exports = {
  extends: [
    'eslint-config-airbnb',
  ].map(require.resolve),
  plugins: [
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
    'no-shadow': 0,
    'no-underscore-dangle': [
      'error',
      {
        allowAfterThis: true,
      },
    ],
    'react/no-multi-comp': 0,
    'react/prop-types': 0,
    'react/sort-comp': 0,
    'react/jsx-no-bind': 0, // ES6 classes do not autobind methods
    'react/wrap-multilines': 0,
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
