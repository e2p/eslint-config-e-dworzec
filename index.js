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
    eqeqeq: [
      2,
      'allow-null',
    ],
    'func-names': 0,
    indent: [
      2,
      2,
      {
        SwitchCase: 1,
      },
    ],
    'no-alert': 0,
    'no-nested-ternary': 0,
    'no-shadow': 0,
    'no-undef': 0,
    'no-unused-vars': [
      2,
      {
        args: 'none',
      },
    ],
    'no-use-before-define': 0,
    'no-param-reassign': [
      2,
      {
        props: false,
      },
    ],
    'prefer-arrow-callback': 0,
    'react/jsx-no-bind': [
      2,
      {
        allowArrowFunctions: true,
        allowBind: true,
      },
    ],
    'react/jsx-closing-bracket-location': 0,
    'react/no-multi-comp': 0,
    'react/jsx-no-undef': 0,
    'react/prop-types': 0,
    'react/react-in-jsx-scope': 0,
    'react/sort-comp': 0,
    'react/wrap-multilines': 0,
    'space-before-function-paren': [
      2,
      'never',
    ],
    'vars-on-top': 0,
    'header/header': [
      2,
      'line',
      [
        ' @flow',
        ' Copyright (c) 2015-present, Early2Pay Sp. z o.o. All rights reserved.',
      ],
    ],
  },
  globals: {
    __DEV__: false,
    $Diff: false,
    $Keys: false,
    $Shape: false,
    Class: false,
    ReactClass: false,
  },
};
