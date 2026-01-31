IT3040 - IT Project Management (ITPM)
Assignment : Automated Quality Assurance Testing

Student Registration Number: IT22075512

Option Selected: Option 1 - Singlish to Sinhala Transliteration

Target System: Swift Translator
1. Project Overview

This project contains an automated test suite designed to evaluate the functional accuracy and UI stability of a Singlish-to-Sinhala transliteration system. The suite covers:

    24 Positive Functional Scenarios: Validating accurate conversion of sentence structures, tenses, and mixed language content.

    10 Negative Functional Scenarios: Testing the robustness of the system against messy inputs, formatting issues, and slang.

    1 UI Scenario: Verifying the real-time update behavior of the output interface.

2. Technical Stack

    Framework: Playwright (Automated testing tool)

    Language: JavaScript

    Version Control: Git 

3. Installation and Setup

To run the automated tests locally, ensure you have Node.js installed, then follow these steps:

    Clone the Repository:
    Bash

    git clone https://github.com/chanuque/Playwright-Automation-Singlish-Transliterator

    Navigate to the Project Directory:
    Bash

    cd IT22075512

    Install Dependencies:
    Bash

    npm install

    Install Playwright Browsers:
    Bash

    npx playwright install

4. Running the Tests

Execute the following commands in your terminal:

    Run all tests (Headless mode):
    Bash

    npx playwright test

    Run tests with a browser window (Headed mode):
    Bash

    npx playwright test --headed

    Generate and view the HTML Test Report:
    Bash

    npx playwright show-report

5. Submission Artifacts

As per the assignment requirements, the following files are provided in the submission zip:

    Playwright Project Repository: Full source code and configurations.

    Completed Excel File: Assignment 1 - Test cases.xlsx containing the test cases and execution results.

    Repository Link: IT22075512_Repo.txt containing the link to this public GitHub repository.
