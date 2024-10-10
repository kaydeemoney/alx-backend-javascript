#!/bin/bash

# Initialize npm project (if not already initialized)
if [ ! -f package.json ]; then
  echo "Initializing npm project..."
  npm init -y
fi

# Install Jest
echo "Installing Jest..."
npm install --save-dev jest

# Install Babel (core, CLI, and preset-env)
echo "Installing Babel..."
npm install --save-dev @babel/core @babel/cli @babel/preset-env

# Create Babel config (.babelrc)
echo "Creating Babel configuration (.babelrc)..."
cat <<EOT > .babelrc
{
  "presets": ["@babel/preset-env"]
}
EOT

# Install ESLint
echo "Installing ESLint..."
npm install --save-dev eslint

# Install Babel ESLint parser for integration
echo "Installing ESLint Babel parser..."
npm install --save-dev @babel/eslint-parser

# Create ESLint config (.eslintrc.json)
echo "Creating ESLint configuration (.eslintrc.json)..."
cat <<EOT > .eslintrc.json
{
  "parser": "@babel/eslint-parser",
  "env": {
    "browser": true,
    "node": true,
    "es6": true
  },
  "extends": ["eslint:recommended"],
  "parserOptions": {
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    // Add your linting rules here
  }
}
EOT

# Add test script to package.json
echo "Adding test script to package.json..."
npx json -I -f package.json -e 'this.scripts.test="jest"'

echo "Setup complete! Jest, Babel, and ESLint are now installed."
