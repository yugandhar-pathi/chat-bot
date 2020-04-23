## ChatBot

This is a Hack day project done on Apr(22nd and 23rd) 2020.

## Goal - Prototype chat bot experience

- Have Chat-button on bottom right corner of the App which can launch chat window.
- Chat button should exist in the same position when user navigates between pages.
- Chat button should launch chat window which will have capability to connect with salesforce liveagent.
- Chat Window stays on the app when user switches between pages.
- Chat window should be draggable and allow user to view what is behind the window.

## Point of contact

- If you have any questions please contact
  - UX - Sulekha - sulekha.kuthiala@hpe.com
  - UI developer - Yugandhar - yugandhar.pathi@hpe.com
  - Salesforce developer - Abdul - abdul.khader@hpe.com
  - Managers - huichen.lee@hpe.com , tony.raj@hpe.com, craig.munson@hpe.com

### Technical details

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

- Grommet is used for components.

### Known Issues

- Chat bot can be dragged beyond window size.
- On chat bot minimize user looses the chat.
  > Will fix issues if UI developer gets some time.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run deploy`

Builds the app and deploys it to github pages.
