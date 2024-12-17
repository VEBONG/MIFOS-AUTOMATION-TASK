# MIFOS-AUTOMATION-TASK

This project is a test automation framework developed using Cypress for testing the mifos web registration form found at https://demo.mifos.io/
The framework uses Page Object Model (POM) to improve code maintainability and scalability.

Prerequisites

Before running the tests, you need to have the following software installed on your machine:

    Node.js (minimum version 12.x)
    Git

Installation

To install the project dependencies, follow these steps:

   1. Clone the repository to your local machine using Git:

Copy
git clone https://github.com/your-username/cypress-project.git

  2. Navigate to the project directory:

Copy code
cd cypress-project

3. Install the dependencies:

npm install cypress --save -dev

4. Running the tests

To run the tests, use the following command:

npx cypress open
Click e2e option
select the browser
Select the test file

This will launch the Cypress test runner and run the test file selected in the cypress/e2e directory.

Configuration

The project includes a cypress.json configuration file where you can configure various options for Cypress, such as the base URL for the application under test, the viewport size, and more.

Folder structure

The project has the following folder structure:

cypress/
    fixtures/
        mifosData.json
    e2e/
        mifosLoanCreation.cy.js
    plugins/
        index.js
    support/
        pages/
            mifosLoanCreation_Page.cy.js
          cypress.json
package.json
README.md

    fixtures/: Contains test data in JSON format.
    e2e/: Contains the test files.
    plugins/: Contains the configuration for Cypress plugins.
    support/: Contains reusable utility functions and Page Object Models (POM) for tests.
    pages/: Contains the page elements.
    cypress.json: The configuration file for Cypress.

Observations

1. The test site is not stable for automation.
2. The system consistently logs out while the user is actively using the application.

Contribution   
If you want to contribute to this project, feel free to create a pull request or open an issue.
Again, this project is subject to future updates.

Thanks.

