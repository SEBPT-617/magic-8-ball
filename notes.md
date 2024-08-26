1 - mkdir magic-8-ball
2 - cd magic-8-ball
3 - touch server.js
4 - npm init -y
5 - npm install express
6 - set up server.js
a. require express
b. create an instance of express
c. create a route for the root URL
d. listen on port 3000
7 - nodemon or node server.js
8 - open browser and go to localhost:3000
9 - create a new route for /:num param

10 - update root and :num routes to return JSON and clickable links
11 - add error handeling and data validation

- After setting up step 6, introduce middleware for morgan
- npm install morgan
- require morgan
- app.use(morgan('dev'))

--- What is middleware? ---

- Middleware is a function that has access to the request object (req), the response object (res), and the next function in the application’s request-response cycle.
- Middleware functions are executed sequentially in the order they are defined in the application. They are the building blocks that help you structure and manage your application logic, handling everything from authentication and logging to error handling and more.
  - These functions can perform a variety of tasks, such as:
    - Modifying the request or response objects.
    - Ending the request-response cycle.
    - Passing control to the next middleware function in the stack.

--- What is morgan? ---

- Morgan is a popular logging middleware for Node.js and Express applications.
- Its primary purpose is to log HTTP requests in a standardized format, making it easier to monitor and debug your application.
- Morgan can be configured to log various details about each request, such as the request method, URL, response status code, and response time.

REVIREW QUESTIONS:

- how do I initialize a new Node.js project?
- how do I install a new package in a Node.js project?
- how do I require a package in a Node.js project?
- what does the `app.use` method do in Express?
- what does `app.listen` do in Express?
- what do I mean when I say "define a route" in Express? What methods have we used to define routes, so far?
- What is /:param ?
