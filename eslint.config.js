import globals from 'globals';

export default [
  {
    ignores: ['node_modules/', 'coverage/', 'reports/'],
  },

  {
    files: ['**/*.js'],

    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',

      globals: {
        ...globals.node,
      },
    },

    rules: {
      'no-unused-vars': [
        'error',
        {
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
        },
      ],
    },
  },

  {
    files: ['tests/**/*.js'],

    languageOptions: {
      globals: {
        ...globals.jest,
      },
    },
  },
];
