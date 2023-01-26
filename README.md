
# Express template

A short description of your project and what it does.

## Getting Started

Instructions on how to set up the project on a local machine for development and testing purposes.

## Folder structure view

```

├── app/
│   ├── controllers/     
│   │   ├── index.js
│   │   ├── chat.js  
│   │   └── ...
│   ├── middleware/     
│   │   ├── index.js
│   │   ├── parser.js
│   │   ├── static.js
│   │   ├── view-engine.js
│   │   └── ...
│   ├── models/   
│   │   ├── index.js        
│   │   ├── chat.js       
│   │   └── ...
│   ├── routes/ 
│   │   ├── index.js          
│   │   ├── api.js        
│   │   └── ...
│   ├── services/         
│   │   ├── index.js
│   │   ├── chat.js    
│   │   └── ...
│   ├── views/            
│   │   ├── include/      
│   │   ├── components/   
|   │   │   |── forms/
|   |   |   └── tables/
│   │   ├── error.ejs
│   │   ├── index.ejs
│   │   └── ...
│   ├── bin/               
│   │   ├── database/
│   │   ├── lib/           
│   │   ├── utils/        
│   │   ├── server.js
│   │   ├── server_chat.js 
│   │   └── ...
│   ├── app.js             
│   ├── index.js
│   └── ...
├── public/
│   ├── assets/           
│   ├── scripts/          
│   ├── styles/           
│   └── ...
├── client/                
│   ├── apps/
|   │   ├── app_a/
|   │   ├── app_b/
|   │   ├── app_c/
│   ├── styles/
│   ├── utils/
│   └── ...
├── .env
├── package.json
├── package-lock.json
├── README.md
├── webpack.config
└── yarn.lock

```

# Directory usage  :


#### app/ :
- Directory contains the main application logic and directory,  

  #### controllers/ : 
  - Logic for handling incoming HTTP requests defining the response to be sent back to the client as well as business logic for different routes and app features & chat. The logic for handling incoming HTTP requests and  defining the response to be sent back to the client.
 
  #### middleware/ :
  - "middleman" handle tasks such as authentication, validation, and error handling, holds custom middleware functions that can be used to modify or handle requests and responses  before they reach the controllers.
 
  ####  models/ :
  - holds the data models that define the structure of the data that the application is working with.
     Object-Relational Mapping (ORM) library, such as Mongoose for MongoDB, structure of the data to be stored in the db, including the fields, types, and validation rule
 
  ####  routes/ :
  - holds the route handlers for different parts of the application.
     combination of an HTTP methods (such as GET, POST, PUT, or DELETE) and a URL paths that defining app endpoint 
 
  #### services/ :
  - holds any additional logic that might be needed for the application to function, such as external service communication. example, a service file for sending email, or a service file for handling payments, or a service  file for image manipulation, chat.
 
  #### views/ :
  - holds the views, which are templates used to render the final HTML pages that are sent to the client. contains the application's views, which are rendered templates that are used to generate the response HTML sent back  to the client
 
     #### include/ :
     - header and footer files, that can be included in multiple view templates
     #### components/ :
     - components that can be used across different views in a web application. navigation bars, buttons, forms, and modals
       #### forms/ : 
       -  app forms
       #### tables/ :
       -  app tables
 
  #### bin/ :
  - app, "binary" file. "www or app" starts the server when the application is run. responsible for setting up the environment variables, establishing connection to db and starting app's main process. 
    #### database/ : 
    - database service configuration
    #### lib/ :
    - holds code that provides a set of useful functions, classes, or other code that can be used across multiple parts of your application. 
    #### utils/ :
    - helper functions and utility small code focused on a single task, such as formatting dates or strings, generating random numbers, or performing common math operations
    #### server.js :
    - main server configuration
 
  #### app.js :
    - main entry point of the application, it's where the express framework is initialized, the routes are defined, is the entry point for the application and it sets up the required middleware and routes.

#### public/ :
- directory holds the assets and resources that are served directly to the client, such as stylesheets and JavaScript files.
   #### assets/ : 
   -  include images, fonts, icons, and any other type of file
   #### scripts/ : 
   - client-side scrips
   #### styles/  : 
   - client-side styles 

#### client/ :
- Contains all the client-side code for the application, including the chat component. directory contains the client-side code and structure that corresponds to the server-side routes, models and controllers.
   #### apps/ : 
   -  Nested mini applications
   #### styles/ : 
   - Server-side styles
   #### utils/  : 
   - Server-side apps shared utility functions


#### .env :
   - contains the environment variables

#### package.json :
   - contains the dependencies and scripts for the application

#### package-lock.json:
   - is automatically generated when dependencies are installed, and it contains a detailed tree of all the dependencies and their versions.
#### webpack.config.js:
- 
#### yarn.lock:
- is automatically generated

#### README.md
-

---




## Prerequisites

- Node.js v12.14.1
- Express.js v4.17.1
- MongoDB v4.2.8

Dependencies to get lis `npm ls --depth=0`
List of dependencies and tools required to set up the project.

>** app ** 
>- express :
>- express-session :

---
>** server **
>- nodemon :
>- pm2 :
>- dotenv :
---
>** formatter **
>- body-parser :
>- cookie-parser :
>- ejs :
---
>** compiling **
>- webpack :
>- webpack-cli :
>- webpack-dev-server :
---
>** utilities **
>- jquery :
>- bootstrap :
>- font-awesome :
>- moment :
---
>** database **
>- mongodb :
>- connect-mongo :
>- connect-mongodb-session :
>- mongoose :
>- mongoose-createdmodified :
>- mongoose-date-format :
>- mongoose-timestamp :
---
>** authentication ** 
>- passport :
>- passport-local :
>- passport-local-mongoose :


## Installation

#### dependencies
`npm install @popperjs/core body-parser bootstrap connect-mongo connect-mongodb-session cookie-parser dotenv ejs express express-session font-awesome jquery moment mongodb mongoose mongoose-createdmodified mongoose-date-format mongoose-timestamp passport passport-local passport-local-mongoose pm2 expose-loader babel-cli babel-loader @babel/core @babel/preset-env --save`

#### devDependencies

`npm install concurrently autoprefixer css-loader mini-css-extract-plugin nodemon postcss-loader sass sass-loader style-loader webpack webpack-cli webpack-dev-server --save-dev
`



## Running the tests

Instructions on how to run tests for the project.

`npm run start` will launch nodemon server and webpack watch server lsitening on port `SERVER_PORT 3030`

`npm run build` will launch webpack compiler  

@directory `./app/bin ` node `server.js` will run server `localhost` on port `3000`


MongoDB connected : `127.0.0.1:27017`





## Deployment

Instructions on how to deploy the project to a live environment.

## Built With

- [Node.js](https://nodejs.org/)
- [Express.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)

## Contributing

Instructions on how to contribute to the project.

## Versioning

Information on how versioning is handled in the project.

## Authors

- *Oscar Andrade* - [Your GitHub Profile](https://github.com/username)

## License

Information on the license used for the project.

## Acknowledgments

- Hat tip to anyone whose code was used
- Inspiration
- etc




---







## Folder structure

```

├── app/
│   ├── controllers/     the logic for handling incoming HTTP requests and defining the response to be sent back to the client.
│   │   ├── chat.js      example
│   │   ├── index.js
│   │   └── ...
│   ├── middleware/      "middleman" handle tasks such as authentication, validation, and error handling
│   │   ├── index.js
│   │   └── ...
│   ├── models/           Object-Relational Mapping (ORM) library, Mongoose for MongoDB, structure of the data to be stored in the db, including the fields, types, and validation rules
│   │   ├── chat.js       example
│   │   ├── index.js
│   │   └── ...
│   ├── routes/           combination of an HTTP methods (such as GET, POST, PUT, or DELETE) and a URL paths that defining app endpoint
│   │   ├── api.js        example
│   │   ├── index.js
│   │   └── ...
│   ├── services/         example, a service file for sending email, or a service file for handling payments, or a service file for image manipulation, chat.
│   │   ├── chat.js       example
│   │   ├── index.js
│   │   └── ...
│   ├── views/            contains the application's views, which are rendered templates that are used to generate the response HTML sent back to the client
│   │   ├── include/      header and footer files, that can be included in multiple view templates
│   │   ├── components/   components that can be used across different views in a web application. navigation bars, buttons, forms, and modals
|   │   │   |── forms/
|   |   |   └── tables/
│   │   ├── error.ejs
│   │   ├── index.ejs
│   │   └── ...
│   ├── bin/               app, "binary" file. "www or app" starts server, sets up the environment variables, establishi connection to db and starting app's main process. 
│   │   ├── database/
│   │   ├── lib/           holds code that provides a set of useful functions, classes, or other code that can be used across multiple parts of your application. 
│   │   ├── utils/         helper small single task functions and utilities, such as formatting dates or strings, generating random numbers, or performing common math operations
│   │   ├── server.js
│   │   ├── server_chat.js example
│   │   └── ...
│   ├── app.js             main entry point of the application, it's where the express framework is initialized, the routes are defined
│   ├── index.js
│   └── ...
├── public/
│   ├── assets/           include images, fonts, icons, and any other type of file
│   ├── scripts/          client-side scrips
│   ├── styles/           client-side styles 
│   └── ...
├── client/                contains all the client-side code for the application, including the chat component.
│   ├── apps/
|   │   ├── app_a/
|   │   ├── app_b/
|   │   ├── app_c/
│   ├── styles/
│   ├── utils/
│   └── ...
├── .env
├── package.json
├── package-lock.json
├── README.md
└── webpack.config

```


### pending 

yarn add -D html-webpack-inline-source-plugin
