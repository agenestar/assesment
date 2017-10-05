# Backend developer assessment 

Documentation is written following the OpenApi 3 standard. The spec is in the `spec.json` file. 

The API configuration is found in the `.dotenv` file

## TODOs
- **Authentication and authorization:** In the docs says that the authentication must be done with the id of a user? If you are a normal **user** you could get the id of an **admin** user, and use it to access info that a **user** is not allowed.
- **TESTS**

## Requirements
- Node.js (>=6) installed
- NPM (>=2) installed

## How to run the server
- Clone the repo
- `npm install --production` - install "dependencies"
- `npm start`

## How to test the server
- Clone the repo
- `npm install` - install "dependencies" and "devDependencies"
- `npm test` - lints the code and run the tests

## How to modify the code
- Clone the repo
- `npm install` - install "dependencies" and "devDependencies"
- `npm dev` - will run the server and restart when a file is changed

## Check licenses 
- `npm run check-licenses`