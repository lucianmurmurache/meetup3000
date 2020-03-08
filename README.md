# A serverless, progressive web application (PWA) built with React using a test-driven development (TDD) technique. The application uses the Meetup API to fetch upcoming events for a selected city.

[Demo](https://lucianmurmurache.github.io/meetup3000/) available but requires a meetup.com account!


## Key Features
1. Filter events by city.
2. Show/hide event details.
3. Specify number of events.
4. Use the app when offline.
5. Add app shortcut to the home screen.
6. View a chart showing the number of upcoming events by date.

## Technical Details
● The app is a React application.
● The app is built using the TDD technique.
● The app passes Lighthouse’s PWA checklist.
● The app makes use of data visualization (recharts).
● The app’s code is hosted in a Git repository on GitHub. 
● The app is monitored using an online monitoring tool [Atatus](https://www.atatus.com/).
● The app is using the Meetup API and OAuth2 authentication flow.
● The app works offline or in slow network conditions with the help of a service worker.
● Users are able to install the app on desktop and add the app to their home screen on mobile.
● The app has an alert system implemented using an OOP approach to show information to the user.
● The app displays well on all screen sizes (including mobile and tablet) widths of 1920px and 320px.
● The app works on the latest versions of Chrome, Firefox, Safari, Edge, and Opera, as well as on IE11.
● The app is using serverless functions (AWS lambda is preferred) for the authorization server instead of using a traditional server.

### Available Scripts

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

#### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

#### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

#### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

#### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

#### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

#### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
