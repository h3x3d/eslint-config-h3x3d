module.exports = {
  'parser': 'babel-eslint',
  'plugins': [
    'react',
    'import',
    'jsx-a11y'
  ],
  'extends': 'airbnb',
  'rules': {
    'no-restricted-syntax': [
      'error',
      'ForInStatement',
      'LabeledStatement',
      'WithStatement',
    ],
    'no-shadow': [0],
    'func-names': [0],
    'no-param-reassign': [0],
    'comma-dangle': [0],
    'new-cap': [0],
    'padded-blocks': [0],
    'no-plusplus': [0],
    'no-underscore-dangle': [0],
    'arrow-parens': 0
  }
};
