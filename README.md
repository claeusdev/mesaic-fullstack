# mesaic-fullstack

## Tools Used
* React
* MongoDB
* Express
* Redux
* Redux-Thunk
* React-Router
* ESLint

## Setup

- The server requires Nodemon to be installed. 
- Clone repo and:
  - `cd repo`
- To run both the server and the client at the same time a shell script has been provided. You might need to change permissions with:
  - `chmod +x start.sh`.
- At the root of the repo run:
  - `./start.sh`
- The client will open in your default browser at `http://localhost:300`


## Run test

- `cd server` and run `yarn test or npm run test` for all tests
- for specific test `cd server` and :
  * run `yarn test-models` to run model tests
  * run `yarn test-routes` to run route tests
  * run `yarn test-controllers` to run controller tests
