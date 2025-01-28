# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Clone

### `clone the repo`

after successful clone, install neccessary node modules

### `npm install`

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Folder Structure

###

### src

     | Components
        | UserDashBoard   (all the user list will appear here with pagination enabled)
            | index.js
            | index.css
        | UserCard        (a reusable component to show user data)
            | index.js
            | index.css
        | UserForm        (a form component used to edit or add user details)
            | index.js
            | index.css
        | PaginationComponent   (Pagination button and actions are managed here)
            | index.js
            | index.css
    | Services
        | ApiConstants.js (constants like success codes api url paths defines here and used throught out app)
        | ApiUtils.js (Api requests will written here)

    App.js  (main component to render the jsx from here)

## Difficulties faced

not much difficulties faced

## Improvements can make if given more time

can implement Search based on username/email,\
 alert/toast messages,\
 it looks great for ui if we implement loader while making api calls,\
 instead of pagination tabs it's looks cool implementing infinite scrolling

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
