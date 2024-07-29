module.exports = {
  root: true,
  extends: '@react-native',
  rules: {
 
    'no-trailing-spaces': 'off', 
  },
  overrides: [
    {
      files: ['*.js', '*.jsx', '*.ts', '*.tsx'],
      env: {
        development: {
          rules: {
            'no-trailing-spaces': 'off',
          },
        },
      },
    },
  ],
};
