Objective 
-------------
I intended MediaLite to be a proof-of-concept newspaper outlet platform that enables its visitors to create User accounts and for its registered users to create Editor and/or Writer accounts.


## Intended Functionality 
Within this concept:
* A new visitor can register for a new User account.
* An Editor manages a list of Writers. 
* A Writer can publish Articles on the platform.
* A registered User can post a Comment on any published Article.

## Design and Dev Decisions
I decided to develop MediaLite using the **`MERN`** stack, consisting, mainly, of these technologies:
* [MongoDB](https://www.mongodb.com/): This is currently my (and perhaps the Node.js community's) NoSQL database of choice. The [Mongoose](https://mongoosejs.com/) package is used as an ODM (Object Data Model) and is used to make CRUD queries against the MongoDB database.

* [Express](https://expressjs.com/): Is the Node.js web framework used to build on top of the Node.js engine. It is currently perhaps the most feature-rich Node.js web development framework out there.

* [React.js](https://reactjs.org/): Is arguably the most popular frontend/SPA framework in the web dev world at this point. I have also found it to be less-opinionated than Angular (my first love :) ) and as such has decided to select it for this project.

* [Redux](https://redux.js.org/): I wanted to gauge the usefulness of this popular State Manager when integrated with a pseudo-complex project like MediaLite. So, instead of using the default React Context Api for State Management, I opted for Redux using the [react-redux](https://react-redux.js.org/) package that connects the two technologies. I am impressed! :) 

* [Node.js](https://nodejs.org/en/): Node.js is the engine on which both ExpressJS and React.js run. Using NPM (its package manager and installer), one can install any needed third-party packages that are compatible and useful for the project at hand. In this case, I used NPM to install such packages as [mongoose](https://mongoosejs.com/), [bcryptjs](https://www.npmjs.com/package/bcryptjs), and others.

## Project Structure
Using my own opinionated "boilerplate" for how a full-stack app should the bootstrapped (which is product of my years of developing with the [Django framework](https://www.djangoproject.com/) and my dev habits when creating [Angular](https://angular.io) apps), I organized MediaLite to have three "entry" points. 

In my opinion, this makes it easy for the original developer (me, in this case) of a project to easily find and/or re-locate specific portions of the codebase without *going crazy*. It also makes it much more intuitive for other members of the dev team to easily what goes where, what does what and where to fish for bugs, etc.

The main "entry points" of the project are:

* ***Server.js***: This is the main entry point of the backend app. It is the "glue" that holds together the various route files, connects the database and starts the project's server.

* ***backend/***: This folder contains the code for the backend (ExpressJS and co.) of the project. Its subfolders are organized into exlicitly-named **models/**, **routes/**, **middleware/**, **views/**, etc.

* ***frontend/***: This folder contains the frontend (React.js and Redux) codebase. Inside the **src/** folder (where the app's codebase sits), I have decided to develop the frontend app in such a way that makes it reusable. As such, if you (or I) decide not to use Redux as the State Manager, that is easily replaceable while another option can be plugged in just as easily. 

To achieve this DRY "pluggabbility" scheme of mine ( :) ), I decided to organize the frontend React.js app into three main subfolders:

* ***`api/`***: This holds the API services that are used to make CRUD calls against the backend RESTful API endpoints. I took the liberty of organizing the API services in a certain way here again:

1. I used [axios](https://github.com/axios/axios), the Promise-based HTTP client for Node.js. It felt more intuitive and appeared more loaded (feature-wise) that the `Fetch Api` utility that comes with React.js.

2. I create a `BaseApi` object, from which all of the other API services inherit. The BaseApi object is where I setup headers, the backend API's 'BaseUrl', etc. as needed.

3. Each API service has been explicitly-named to reflect which type of resource it calls in the backend API. Thus, we have the `UserApi, EditorApi, ArticleApi, WriterApi` and the `CommentApi` services, each of which makes CRUD calls on the "sister" routes/resources at the backend API.

4. There's an intuitive HTTP verb-to-function mapping in how each method of an API service is named. Thus, UserApi.getUserById() is clear about what it does, what args it should be fed, what type of data it should get back from the server, etc. Compare this versus UserApi.getAllUsers() and UserApi.deleteUser(user_id). I wanted each one to speak for itself and therefore, make some types of redundant documentation unnecessary (or, at least minimal, since the methods are acutely-"Englishmanic". :) )

* ***`components/`***: This holds the UI and logic for the app's components. I have sub-divided these into three sub-folders (which somewhat mirror the __model types__ in the backend app):

1. *`layout/`*: Holds the components that determine the shared layout/UI of the app: Header, Footer and Home. 
2. *`auth/`*: To hold authentication-related components.

3. *`manager/`*: Holds the components that has anything to do with handling any type of users: (general) User, Editor and Writer.

4. *`publisher/`*: Handles the components that are concerned with the UI and logic of the Article and Comment objects in the app, that the platform's users will interact with primarily.

* **`dataStore/`**: This is where all the logic of the Redux store resides. Again, opinionated as I am, I have decided to organize the "**dataStore**" into explicitly-named folders:

1. `actions/`: This has a `types/` sub-folder which contains one file each for the action TYPES related to each model. There is also a "_model_Actions.js" file (_e.g. `articleActions.js`, `writerActions.js`, etc.) for each model type. Each of these files contains the **action creators** (i.e functions) for the related model type. Each action creator is exported to enable reuse in other parts of the frontend app, as necessary, mainly in the components.

2. `reducers/`: This contains a file each for every type of model of the frontend app. Thus, the `articleReducer.js` handles updating the application (Redux-based) state based on the *ACTION TYPE* that was `dispatch()`ed from the *ACTION CREATORS* . The `rootReducer` itself is in the `reducers/index.js` file.

3. `index.js`: This is the "motherlode." This is where the app's Redux-based `store` is created and then exported (for use in `App.js`, etc.). The `rootReducer`, the frontend middleware (including `thunk`) also make "cameo" appearances here. This is also where the setup for the [REDUX DEV TOOLS extension](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) is configured.


## Installing Dependencies for the Project 
### Backend Dependencies:
To install the dependencies for the backend app, just head to the root `medialite` project folder and:
* cd into the backend folder:
```bash
cd backend
```

* Next, install the dependencies using NPM
```bash
npm install 
```

This should install all the packages that the backend app needs to run. A new `node_modules/` folder should appear, while the `package.json` and `package-lock.json` files should auto-update to reflect the newly-installed packages.

### Frontend Dependencies:
To install the packages for the frontend app:
* cd into the "frontend" folder
```bash
cd frontend
```
* Use the Node Package Manager (NPM) to install the dependencies:
```bash
npm install 
```

If successful, you should have a new `node_modules` folder  here, too; and your `package.json` and `package-lock.json` files should auto-update to reflect the just-installed packages accordingly.

If all went well, both sets of dependencies (for the backend as well as frontend apps) should be successfully-installed. If you encounter errors, re-trace your steps, using your "google-fu" or scour the treasure islands of StackOverFlow! **;)** 


## Caveat Emptor 
A few things to note about this project.
* This is a proof-of-concept project and is, therefore, provided as-is with no guaranties whatsoever. If something goes awry, I didn't prescribe you the medicine! :)
* Please, don't copy and paste this into an actual "real-live" project.
* If you must, at least, do major updates to sections of the code before adapting it to your needs. Again, I am not recommending you use this code, but this is open source...so...

## On Further Development 
### Databases
* I chose MongoDB because it is the preferred(?) database for Node.js developers, hence the "**M**" in the MERN and MEAN stacks' names.

* If your database needs are better-covered by a different database (SQL or not), please, have a go at it, at your discretion.

### Authentication
* I used JWT Auth for this project. See [JWT.io](https://jwt.io) for details on its uses.

* If you prefer other token-based authentication systems or even session-based auth, please, go ahead and try that. If it doesn't mesh well, you can always find your way back to the JWT world. It's an open world; you are always welcome! :) 

### Middleware 
* You can create middleware to handle "user permissions" at the object/mode level or for routes that should only be accessible by site/project admins. 

* See the Express guide, [Using Middleware](https://expressjs.com/en/guide/using-middleware.html), for the details on implementing your own custom middleware.

### RWD: Responsive Web Design 
* I sacrificed design for functionality in this project. That is why I (barely) wrote any custom CSS and didn't use any RWD frameworks either.

* You can greatly implement the UI appeal of this project (or others) using [reactstrap](https://reactstrap.github.io/), [Material Design Lite](https://getmdl.io) or other responsive web design frameworks.

### Contact Me:
I am online (on Social Media) and on my own websites. Here's where and how to get in touch with me.

#### Social Media:
I can be reached, connected with, be-friended or followed on:
* [LinkedIn](https://linkedin.com/in/muhammadjalloh)
* [Twitter](https://twitter.com/techbuktu)
* [GitHub](https://github.com/techbuktu)

#### My Tech Space:
I have a few websites online, but the most relevant here are:
* [TechBuktu](https://techbuktu.com) (I publish some web dev tutorials here every once in blue moon.)
* [Siratiq: Interactive Mapping Platform](https://siratiq.com) (This is a work-in-progress platform that lets you create, share and discover photos, blog posts, notes and videos parlayed on your own personal map. Other features are forthcoming, God willing! :) )

### `I am Looking for a Full Stack Role`
If you are reading this, I am currently looking for a Software Development role that enables me to work with Python and/or JavaScript (on the backend) and React.js or Angular on the frontend. I prefer either a position local to Chicago, IL or remote. If you have something that fits what I am looking for, please, send me a message via LinkedIn **https://linkedin.com/in/muhammadjalloh** and we will take it from there! :) 