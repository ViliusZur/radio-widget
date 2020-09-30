# About

This is a radio widget. It does not perform any meaningful functions. This is a mostly static widget - selecting a station is the only action available. After selecting a station, it toggles it and displays its' name at the bottom of the widget.

You can check the demo here:\
[![Demo](https://i.imgur.com/xHgFi3A.png)](https://radio-widget.netlify.app/)

### Technologies used:
- [TypeScript](https://www.typescriptlang.org/)
- [React](https://reactjs.org/)
- [Jest](https://jestjs.io/)
- [Netlify](https://www.netlify.com/)
- [EsLint](https://eslint.org/)
- [Prettier](https://prettier.io/)

## How to run the app

Clone the repository: `git clone https://github.com/ViliusZur/radio-widget.git`\
Change directory to the repository: `cd radio-widget`

### If you are using Docker:
Compose with Docker: `docker-compose up -d --build`\
The app will be located at: `localhost:3000`

### If you are using npm:

Install dependencies: `npm install`\
Start the project: `npm start`\
The app will be located at: `localhost:3000`

## How to run tests

* Run the tests: `npm run test`
* Run the tests and output coverage: `npm run test:coverage`

Coverage will be available in your Terminal. If you wish to see it in an html format and inspect it deeper - head over to `<root>/coverage/lcov_report/index.html`
