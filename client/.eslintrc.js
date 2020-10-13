module.exports = {
  'env': {
    'browser': true,
    'es2021': true,
    'jest/globals': true,
    'node': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 12,
    'sourceType': 'module'
  },
  'plugins': [
    'react',
    'jest'
  ],
  'rules': {
    'eol-last': ['error', 'always'],
    'indent': ['error', 2],
    'jest/no-disabled-tests': 'warn',
    'jest/no-focused-tests': 'warn',
    'jest/no-identical-title': 'warn',
    'jest/valid-expect': 'warn',
    'quotes': ['error', 'single'],
    'semi': ['error', 'always']
  },
  'settings': {
    'react': {
      'version': 'detect',
    }
  }
};
