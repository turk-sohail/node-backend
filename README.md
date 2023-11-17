This is nodejs repository for nodejs file structre implementation


`src`--> inside src folder will have all the implementation of code that we will write during 
the development

no tests are included but you can add them yourself 

lets look at folders 

-`config` --> This folder includes setup of all configurations about everything of library or module
for example `dotenv` file using `server config` file .One more example is use of `server-config.js`

`routes` --> In this folder, we register a route and corresponding middlewares and controllers to it

`middlewares` --> They are going to intercept incomming requests where we can write authenticators,validators etc.

`controllers` --> They are act as last middlewares here we call business logic. Here we recieve data and pass it to business logic as input, once business layer performs calculations and returns output we structure the API response in controllers and send the output.

`repositories` --> This folder contains all the logic using which we interact with DB by writing queries, all the raw queries or ORM queries will go here.

`Services` --> services contains business logic interact with repository for database access
`utils` --> contains helper methods and error classes etc.


### Project setup

download this template from github open in editor.In the root directory create `.env` file.
Then add the following envoirment variables


```




PORT=etc /3000



```

create a new file inside src/config/config.json and add code in following pattern


{
  "development": {
    "username": "root",
    "password": null,
    "database": "database_development",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

go to root folder and run npm install or i 

then use npx sequelize cli  
npx sequelize init command  }

