Summary
-------

###This NodeJS based app covers following
(NodeJS, ExpressJS, MongoDB, JWT, TokenBased Authentication)

* What is express middleware
* Create and use routes and controllers that work as express middleware.
* How to create and verify user tokens.
* How to protect certain routes in our application with our token middleware.

###Dependencies

* body-parser: This will add all the information we pass to the API to the 'request.body' object.
* bcrypt: We'll use this to hash our passwords before we save them our database.
* dotenv: We'll use this to load all the environment variables we keep secret in our .env file.
* jsonwebtoken: This will be used to sign and verify JSON web tokens.
* mongoose: We'll use this to interface with our mongo database.

* Development dependencies
* morgan: This will log all the requests we make to the console whilst in our development environment.
* nodemon: We'll use this to restart our server automatically whenever we make changes to our files.


###To Start
$ npm install
$ npm dev run

access: localhost:3000 (~postman or curl)


Ref# https://scotch.io/tutorials/authenticate-a-node-es6-api-with-json-web-tokens
