# Playwright + TypeScript tech evaluation for LoopQA
This project is built according to the Page Object Model (POM) pattern and leverages data-driven techniques to drive test scenarios from a JSON object.

## Installation

 From the root of this project run following command to install packages:
 
 ```
 $ yarn install
 ```

## Setup
Create `users.json` file with users creadentials that will be used to login to the app. For that just run following command from the root of the project it will create you file from template.
```
$ cp src/auth/users.template.json src/auth/users.json
```
> [!IMPORTANT]  
> Go to [created user.json file](./src/auth/users.json) and input username and password for admin user.


## Running tests
To run test, from the root of the project run following command:
```
$ npx playwright test
```

## Report
To open up html report run following command: 
```
npx playwright show-report
```