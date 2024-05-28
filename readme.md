
## Installation

### 1. Initialize the Project
Open your terminal. Navigate to your project directory.

Run the following command to initialize a new Node.js project:

```bash
  npm init -y
```
### 2. Install Dependencies
Install the required dependencies by running the following commands:
```bash
npm install express
npm install mongoose --save
npm install cors
npm install dotenv --save

# Install TypeScript and related development dependencies
npm install typescript --save-dev
npm install ts-node-dev --save-dev
npm install eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin --save-dev
npm install --save-dev prettier
npm i -D typescript-eslint

```
### 3. Configure TypeScript
Initialize TypeScript configuration:
```bash
  tsc --init
```
Update tsconfig.json to specify source and output directories:
```bash
 {
  "compilerOptions": {
    "rootDir": "./src",
    "outDir": "./dist",
    // Other configurations...
  },
  "include": ["src"],
  "exclude": ["node_modules"]
}
```
### 4. Set Up Scripts in package.json
Update the scripts section in your package.json:
```bash
  "scripts": {
  "start:dev": "ts-node-dev --respawn --transpile-only src/server.ts",
  "start:prod": "node ./dist/server",
  "build": "tsc",
  "test": "echo \"Error: no test specified\" && exit 1",
  "lint": "eslint src",
  "lint:fix": "eslint src --fix",
  "prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
  "prettier:fix": "npx prettier --write src"
}
```
### 5. Set Up ESLint and Prettier
Initialize ESLint configuration:
```bash
  npx eslint --init
```
Update .eslintrc.json to extend recommended configurations:
```bash
  {
  "extends": ["eslint:recommended", "plugin:@typescript-eslint/recommended", "prettier"]
}

```
Add the following to your package.json scripts:
```bash
"lint": "npx eslint src --ignore-pattern .ts",
"lint:fix": "npx eslint src --fix",
"prettier": "prettier --ignore-path .gitignore --write \"./src/**/*.+(js|ts|json)\"",
"prettier:fix": "npx prettier --write src"

```
### 6. Build and Run the Application
Build the application:

```bash
npm run build
```
Run the server in development mode:
```bash
npm run start:dev
```
Or run the server in production mode:
```bash
node ./dist/server
```

## Conclusion
You have now set up your Node.js application with TypeScript, Express, Mongoose, ESLint, and Prettier. Follow the steps above to ensure everything is configured correctly, and use the provided scripts to manage development and production builds.