module.exports = {
  'extends': 'airbnb/base',
  'parser': 'babel-eslint',
  'plugins': ['babel'],
  'rules': {
    'no-shadow': [0],
    'func-names': [0],
    'no-param-reassign': [0],
    'comma-dangle': [0],
    'new-cap': [0],
    'padded-blocks': [0],
    'no-plusplus': [0],
    'arrow-parens': 0,
    'babel/arrow-parens': [2, 'as-needed'],
    'generator-star-spacing': 0,
    'babel/generator-star-spacing': [2, { 'before': false, 'after': true }]
  }
};
