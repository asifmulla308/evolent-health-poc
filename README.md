# Evolent Health UI

## Overview
- UI url: https://localhost:3000
- API url: https://localhost:44376/api/v1/
- EvolentHealth UI has been developed using Reactjs and React-testing library,Jest
- Material UI has been used for UI element
- Unit test case is written using  React-testing library,Jest

## Project Directory

- A typical top-level directory layout

├── src     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Source files (alternatively `lib` or `app`) \
├── .env    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     # Global environment variable declaration \
├── App          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Used to load application UI with routing logic  \
├── Index    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Root file \
├── package.json  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      # Contains commands to launchor test application.Also contains dependency packages \


### Source file(src) -A typical top-level directory layout

├── __tests__     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Unit test case \
├── components    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     # Reusable components(datagrid,Dialog Modal) \
├── css          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Style sheets  \
├── helpers    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Contains Common code API access,utility \
├── pages  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      # Contains parent pages   \



## Here's how UI looks like 

- Launch Screen

![Alt text](https://github.com/asifmulla308/evolent-health-poc/blob/master/images/home_screen.png "home screen")

- Create new user Screen

![Alt text](https://github.com/asifmulla308/evolent-health-poc/blob/master/images/createnew_profile.png "create screen")

- Edit user details Screen

![Alt text](https://github.com/asifmulla308/evolent-health-poc/blob/master/images/onedit_click.png "edit screen")

- Change profile stautus Screen

![Alt text](https://github.com/asifmulla308/evolent-health-poc/blob/master/images/status_change.png "Change status screen")

- Validation Screen

![Alt text](https://github.com/asifmulla308/evolent-health-poc/blob/master/images/validation.png "home screen")

### Development Details:
- Used axios library to communicate .net core API(https://localhost:44376/api/v1/)
- helper>data-access.js - Contains all http methods that has been used.
- Maked use of reusable component/
- Controller has below methods
- Handle all fields validation properly.


## Available Scripts

### `npm start`
Runs the app in the development mode.\
Open (http://localhost:3000) to view it in the browser.

You can also see any lint error in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\




