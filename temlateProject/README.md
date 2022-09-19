# TypeScript Template Project

This is a template project for TypeScript.

## How to use

1. Clone this repository and `cd` into it
2. `npm install`
3. `npm start`

## How to create a template project and use it

1. Install Node.js (and npm)
2. Create a directory `mkdir` and `cd` into it
3. Create a HTML file and add `script` tag below
     - `<script src="app.js" defer></script>`
4. Install TypeScript -g
     - `npm install -g typescript`
     - `npm ls -g --depth=0`
     - `tsc --version`
5. Create a TypeScript file
     - `touch app.ts`
6. To make compilable TypeScript files in the project folder

      ``` Terminal
      tsc --init
      Created a new tsconfig.json with: TS
       target: es2016
       module: commonjs
       strict: true
       esModuleInterop: true
       skipLibCheck: true
       forceConsistentCasingInFileNames: true

7. npm init
     - `npm init -y`
8. Install lite-server or nodemon
     - `npm install lite-server --save-dev`
9. Add a script to `package.json`
     - `"start": "lite-server"`
10. Start lite-server
     - `npm start`
11. Open another terminal and run `tsc -w`
     - `tsc -w`
12. Access to `http://localhost:3000`
