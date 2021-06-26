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


- Source file(src) -A typical top-level directory layout

├── __tests__     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Unit test case \
├── components    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;     # Reusable components(datagrid,Dialog Modal) \
├── css          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Style sheets  \
├── helpers    &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Contains Common code API access,utility \
├── pages  &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;      # Contains parent pages   \

### Unit Test(EvolentHealthAPITest) - A typical top-level directory layout

- Unit test covers all method/function that has been used. \

├── ControllerTests &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;# Covers UnitTest case for all controller's actions \
├── Repository     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;   # Covers unit test case  for repository functions



### Swagger UI
- Swagger Index screen

![Alt text](https://github.com/asifmulla308/EvolentHealth_API/blob/master/images/swagger_main.png "swaggermain")

- Swagger real time example

![Alt text](https://github.com/asifmulla308/EvolentHealth_API/blob/master/images/swagger_get_demo.png "swaggermain")

### Development Details:
- Used SQL Server Database ('Database Name': "evolenthealth")
- Used .Net Core API
- For Database and application communication used Entity Framewor. Follows Database first approch.
- Controller has below methods


├── Get             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Get All list of contacts \
├── GetContactById   &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        # Get contact by passing Id \
├── Post             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;        # Insert new contact \
├── Put             &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;         # Update existing Contact details \
├── UpdateStatus(Put) &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;       # Update user status \
├── Delete            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;       # Delete contact details using 


## Available Scripts

### `npm start`
Runs the app in the development mode.\
Open (http://localhost:3000) to view it in the browser.

You can also see any lint error in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\




