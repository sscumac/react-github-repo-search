Please install missing dependencies (yarn add/npm install). Run app with yarn start.


**Architecture & Components**

![image](https://user-images.githubusercontent.com/66644788/115029916-c9b92780-9ec6-11eb-9b5d-bb98786934cf.png)
 
I chose to split the page into a Header part and a part holding the lists, whereas each part is represented as a single component. The header component includes the Input Field component as well as the Button component. The ReproListsContainer component holds the list components which consists of additional subcomponents for Header and the Repository Cards. I defined only one list component which is used by Search Results as well as Favorites, so the page could be easily extended by more lists if needed. 

States: I declared all the states within App.js to have them globally available on one place. From there I can pass down to whichever place it is needed. Only specific repo card states are kept locally. 

Data-Logic: Logic and Functions concerning data fetching and -storage are also kept centrally in App.js and can be passed to where it is needed. For a larger application with multiple pages however, this would of course be handled separately in component responsible for search.

**Styling**

I organized the CSS styling per component to keep the stylesheets crisp and clear. Putting it in React CSS modules allows to even keep the CSS classes on local scope for each component. Not that needed in a small app like this, however, when scaled up the CSS modules will avoid naming conflicts and I don’t have to worry about the naming of classes itself.

For now, I did not make use of a specific CSS library like Tailwind as I tried to stay as close as possible to the provides mockup. However, I am aware that for larger projects especially when working in teams a CSS library is definitely beneficial.


**Additional Dependencies**

I Installed the Enzyme testing utility for jest:
https://enzymejs.github.io/enzyme/



**Missing Requirements**

As far as I can tell the app works as per the requirements. The only missing requirements/bug is the fact that the app does not update the button text when a repo is unsaved from the favorites. In the given time I did not manage to implement a working logic but I am sure there is a way.


**Testing**

I was able to implement some basic tests in the test file with Jest and Enzyme. I also tried to write a test for the search results count (check if it is 40 for the first search) but it is never passed successfully. It kind of seems that there are no search results at all when the test runs. To my understanding (also based on the available documentation) the code in the file should work. Maybe I am also still missing something fundamentally in terms of react testing. Nevertheless, testing is still a chapter I want (and need) to dive deeper into. 



------------------------------------------------------------------------------------------------------------------------------------------

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
