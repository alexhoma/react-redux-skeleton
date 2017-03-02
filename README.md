# React JS Boilerplate

Single page app using React JS + Redux, served by Express.js. It also comes with Webpack, Babel ES6 compiler, React Router, SASS loaders and a very basic directory structure following the redux pattern.

It's basically a boilerplate to initialize my react.js projects.
Based on several resources.

## Initialize

Just type this commands to initialize the app **locally**:
```avascript
> npm install
> npm start
```

- Webpack dev server with hot reloading allows you to see the changes while you are coding. So you don't need to reload your browser every time.
- The `server.js` file on your root directory will serve your app on your production environment. But you can also run it locally on `localhost:8080` typing:

  `npm run server` or `node server.js`

## Content
This boilerplate contains a blog view example with some posts related by categories.
No CRUD functionality added yet, it is just a view app.

The example data comes from a mock endpoint. Using [mockable.io](https://www.mockable.io).
Once you recieve the data, the post object looks like the following:

```javascript
{
    "id": 1,
    "slug": "hello-react",
    "title": "Hello React",
    "content": "The path of the righteous man is beset on all sides by the iniquities...",
    "author": "Samuel L. Jackson",
    "categories": [
        {
             "slug":"programming",
             "title": "Programming"
        },
        {
             "slug":"sports",
             "title": "Sports"
        }
    ]
}
```

## Deploy to Heroku
An easy way to check your app up and running is to deploy using heroku.

First you will need to create an account and download their CLI tools. This two first steps of the tutorial will help you to setup Heroku to your command line:
* [Introduction](https://devcenter.heroku.com/articles/getting-started-with-nodejs#introduction)
* [Set up CLI](https://devcenter.heroku.com/articles/getting-started-with-nodejs#set-up)

```javascript
// tell heroku you are creating a new app (without the curly braces!)
> heroku create {your-app-name}

// check if your app runs well locally
> heroku local web

// push it to heroku
> git add .
> git commit -m "Deploying app"
> git push heroku master

// scale your web container to 1
> heroku ps:scale web=1

// check if your container is running
> heroku ps

// open browser with your app
> heroku open
``