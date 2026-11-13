# Week 7: JavaScript Best Practices

**Author:** Kevin Muraguri  
**GitHub:** [kevinmuraguri4-hub](https://github.com/kevinmuraguri4-hub)  
**Repository:** [iyf-s12-week-07-kevinmuraguri4-hub](https://github.com/kevinmuraguri4-hub/iyf-s12-week-07-kevinmuraguri4-hub)

## Project Description
This project upgrades a JavaScript To-Do List with browser storage, modular code, centralized state, code-quality tools and automated unit tests. It also includes a small shopping cart class build.

## Technologies Used
- HTML5 and CSS3
- JavaScript ES modules
- Browser localStorage
- npm
- ESLint and Prettier
- Vitest

## Features
- Add, complete, filter and delete tasks.
- Save tasks and filter preference in localStorage.
- Restore the selected light/dark theme after refresh.
- Clear completed tasks or all tasks.
- Separate application logic, storage, state and DOM rendering into modules.
- Shopping cart with quantity controls and persistent cart data.
- Unit tests for pure To-Do List functions.

## How to Run
1. Install Node.js 22 or 24.
2. Clone this repository.
3. Run `npm install`.
4. Run `npm test` to execute the unit tests.
5. Run `npm run lint` to check code quality.
6. Open `index.html` using VS Code Live Server. ES modules should be served over HTTP, not opened directly as a `file://` page.
7. Open `cart/index.html` to try the shopping cart.

## Lessons Learned
- localStorage stores strings, so objects and arrays need JSON serialization.
- State should be the source of truth and the UI should be rendered from state.
- Pure functions are easier to test because they do not depend on the browser DOM.
- ES modules help separate responsibilities and make code easier to maintain.
- ESLint, Prettier and automated tests help catch mistakes early.

## Challenges Faced
The project requires keeping saved browser data valid, separating DOM code from pure logic, and setting up modern JavaScript tooling. Invalid saved JSON is handled safely with fallback values.

## Collaboration
The peer review section is not yet completed. Add the link to your own refactor pull request and the link to the review you write for a classmate after completing those activities. Do not invent reviewer details or claim an approval that has not happened.

## Daily Challenges
See [daily-challenges/README.md](daily-challenges/README.md). Record each challenge as you complete it.

## Project Status
The Week 7 starter implementation has been uploaded. Run the checks locally, install dependencies to generate and commit `package-lock.json`, and complete the required GitHub peer-review workflow before submitting the assignment.
