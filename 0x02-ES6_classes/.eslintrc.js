module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true, // Enable jest global variables
  },
  extends: [
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:jest/recommended', // Jest plugin for Jest-specific linting
  ],
  parserOptions: {
    ecmaVersion: 12, // Allows parsing of modern ECMAScript features (e.g., ES6+)
    sourceType: 'module', // Enable module imports
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.'], // Ensure ESLint looks in the current directory for modules
        extensions: ['.js'], // Allow `.js` extensions in import statements
      },
    },
  },
  rules: {
    'import/extensions': [
      'error',
      'always', // Enforce that `.js` file extensions must be explicitly added to imports
      { js: 'always' }, // Specific for JavaScript files
    ],
    'import/no-unresolved': [
      'error',
      { ignore: ['^\\.'] }, // Allow relative imports like './myModule'
    ],
    'no-unused-vars': ['warn'], // Warn about unused variables
    'no-undef': 'off', // Disable 'no-undef' for modules like 'Symbol' in older Node.js versions
    'no-console': 'off', // Optional: allow console logs for debugging
    'no-shadow': 'off', // Optional: allow variable shadowing (if desired)
  },
  overrides: [
    {
      files: ['__tests__/*', '*.test.js', '*.spec.js'], // Apply specific rules for test files
      rules: {
        'no-undef': 'off', // Turn off 'no-undef' for Jest's global variables like 'test' and 'expect'
      },
    },
  ],
};
