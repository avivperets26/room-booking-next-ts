# Habyt Fullstack Interview Project

## Overview
Welcome to the Habyt Fullstack Interview Project! In this assignment, you will be creating a product page. You have 72-hours to complete and return this project. 

## Objective
Your task is to build a product page that displays an array of available rooms, each with specific details like address, price, availability date, and images.

The data comes from the live Common.com bulk Internet Listing Service (ILS) feed, which is available at https://www.common.com/cmn-api/listings/common and the schema desciption is available here: https://www.common.com/cmn-api/docs#/integration/ListingsController_findAllCommonListings

You can either pull from the feed directly or use the data.json file that includes the first 10 rooms. If you do use the feed you may limit the number of rooms shown to a reasonable number - or not - as you see fit.


## Key Features:
- Display of Rooms: Fetch and display room details from the Common ILS.
  - not all information needs to be displayed. Use your judgement. Essential items to display are - but not limited to - an image, location, price, availability date.
- Booking Feature: Implement a 'Book' button for each room to initiate the booking process.
- Booking Workflow: Create a multi-step booking form which includes:
  - Collecting background information (e.g., name, salary).
  - Confirmation of room details, price, and date.
  - A mock interaction with a service like DocuSign for lease signing.
  - A welcome view upon completion.
  - State should be encoded in the URL
  - The user should be able to go back steps

## API Mocking

API calls should be mocked using Next.js API routes to simulate back-end functionality when needed.

## Technical Requirements
- Framework: Next.js with TypeScript.
- Data Handling: Use the above mentioned ILS feed for room details. User proper validation.
- Mock APIs when necessary: Backend interactions should be mocked using Next.js API routes.

## Getting Started
- Clone the Repository: git clone [repo-link]
- Install Dependencies: Run npm install or yarn install in the project directory.
- Start the Development Server: Execute npm run dev or yarn dev.

## Submission Guidelines
- Clone this repository. Do not fork.
- Ensure the application is fully functional and meets the project objectives.
- Submit the github URL

## Evaluation Criteria
- Functionality: Adherence to the provided specifications.
- Code Quality: Clarity, maintainability, and use of best practices.
- UI/UX Design: Intuitive and user-friendly interface.
- Error Handling: Robust handling and reporting of errors.
- Testing: Ensure proper testing. Use your judgement about what needs to be tested. We aren't looking for code coverage but good testing and reasoning.
- Documentation: Clear and concise comments and documentation where necessary.


## Aviv's Commnets:
-Colors taken from https://www.design-seeds.com/2021/11/color-reflection.html to make sure site design will be with the best match colors.
-Document Signing i used embaded library used by https://www.docuseal.co/

some notes, regarding to Document Signing, the try to use DocuSign API consume lots of time and unfurtuntly wasnt bring good results, i found new library called Docuseal which prividing embadded option.


-----------------
Dev Steps:
-Background Information: add validation for input --V
-Background Information: add Email --V
-Background Information: Add required fields with disabled button connected --V
-Confirmation: finish styling --V
-ContractSigning: Finish Styling --V
-ContractSigning: add Docking Mock api --V
-Add Testing --V
-Pagination --V
-Pages button invert onHover -- V
-add return home page button -- V
-Dynamic Button component --V
-Add Title at homepage --V
-Add saved information state in store state --V
-Add Loading Spinner animation --V