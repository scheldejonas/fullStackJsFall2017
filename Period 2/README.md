# Period 2 - Exam Preparation

###### Sources

- https://docs.google.com/document/d/19_PQi8gEQeoRmTqndb6jd87iSihU8HRW0koIH8nEES8/edit?usp=sharing
- https://www.youtube.com/watch?v=QseHOX-5nJQ
- https://docs.google.com/document/d/12AKRDn-PGH4mkBuKgVpKxqXAw33R5x9DX-QrIHzaPAY/edit?usp=sharing
- https://docs.google.com/document/d/1-Bu_FC___DM9tS8fugsLe4EnwjPs4OSYCe6PMsCVE2Y/edit?usp=sharing
- http://slides.mydemos.dk/express1/express1.html#1
- http://expressjs.com/
- https://docs.google.com/document/d/1-Bu_FC___DM9tS8fugsLe4EnwjPs4OSYCe6PMsCVE2Y/edit?usp=sharing
- https://docs.google.com/document/d/1wPaS9vSoMQNbSR5KTSro7CXt2yfQzm2s9cPM3ZCvmTg/edit?usp=sharing
- http://slides.mydemos.dk/rest/rest.html#1
- https://mochajs.org/
- http://chaijs.com/api/bdd/#method_throw
- https://docs.google.com/document/d/1JyQ4Qgdori9QYZ8Pfjp5x7P5vIGImx0Byc4pNrG9DXA/edit?usp=sharing
- https://semaphoreci.com/community/tutorials/getting-started-with-node-js-and-mocha
- http://slides.mydemos.dk/test1/unitTestingBackend.html#1
- https://www.youtube.com/watch?v=qI_g07C_Q5I
- https://scotch.io/tutorials/using-mongoosejs-in-node-js-and-mongodb-applications
- https://developer.mozilla.org/en-US/docs/Learn/Server-side/Express_Nodejs/mongoose#Mongoose_primer
- http://slides.mydemos.dk/noSQL/mongo_mongoose.html#1
- [Link about Cross site Scripting](https://www.owasp.org/index.php/Cross-site_Scripting_(XSS))
- https://www.owasp.org/index.php/Session_hijacking_attack
- https://stormpath.com/blog/build-secure-user-interfaces-using-jwts
- https://www.youtube.com/watch?v=L5l9lSnNMxg
- https://www.youtube.com/watch?v=vRBihr41JTo
- https://www.youtube.com/watch?v=T1QEs3mdJoc
- https://docs.google.com/document/d/1LIDVt8stIi770lm9xzgiawvOOrCQR3VHgqqBj6UEkeU/edit
- http://slides.mydemos.dk/security1/security.html#32
- http://expressjs.com/en/advanced/best-practice-security.html
- https://stackoverflow.com/questions/6550760/for-restful-services-in-java-is-jax-rs-better-than-an-mvc-framework-like-swing
- https://www.infoworld.com/article/2687995/java/4-reasons-to-stick-with-java.html
- https://www.altexsoft.com/blog/engineering/the-good-and-the-bad-of-node-js-web-app-development/
- http://voidcanvas.com/describing-node-js/
- https://www.infoworld.com/article/2687995/java/4-reasons-to-stick-with-java.html
- https://medium.freecodecamp.org/scaling-node-js-applications-8492bd8afadc
- https://strongloop.com/strongblog/best-practices-for-express-in-production-part-two-performance-and-reliability/#ensure-your-app-automatically-restarts
- https://scotch.io/tutorials/test-a-node-restful-api-with-mocha-and-chai
- http://mochajs.org/#asynchronous-code
- https://scotch.io/tutorials/nodejs-tests-mocking-http-requests
- [Link for aws lambda function in node js](https://scotch.io/@richardhyatt/unit-testing-aws-lambda-functions-in-nodejs)
- http://docs.aws.amazon.com/lambda/latest/dg/welcome.html
- https://scotch.io/tutorials/how-to-use-browsersync-for-faster-development
- http://expressjs.com/en/guide/using-middleware.html
- https://scotch.io/tutorials/route-middleware-to-check-if-a-user-is-authenticated-in-node-js
- https://scotch.io/tutorials/easy-node-authentication-setup-and-local
- https://scotch.io/tutorials/easy-node-authentication-google
- https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication
- http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm
- https://www.cookielaw.org/faq/
- https://tools.ietf.org/html/rfc7009
- https://scotch.io/tutorials/the-ins-and-outs-of-token-based-authentication
- https://scotch.io/tutorials/the-anatomy-of-a-json-web-token
- https://scotch.io/bar-talk/why-jwts-suck-as-session-tokens
- https://stackoverflow.com/questions/11344346/node-js-what-are-the-advantages-of-using-jade
- https://stackoverflow.com/questions/12526160/mocking-database-in-node-js
- https://www.npmjs.com/package/db-mock

### Pros & Cons using Node.js + Express vs. Java/JAX-RS/Tomcat

- Why would you consider a Scripting Language as JavaScript as your Backend Platform?


- Explain Pros & Cons in using Node.js + Express to implement your Backend compared to a strategy using for example Java/JAX-RS/Tomcat

<u>*Language:*</u>

It’s weakly typed, so you don’t have to explicitly declare objects as a String, int, float, etc. That’s good for a quick prototype. In a large production project, this can bite you in the ass if you make the wrong assumption about a type. If this is a concern, there are solutions such as TypeScript where you write your code in a different syntax and a pre-processor will validate the code before compiling it to plain old JS. Vanilla JS can be a maintenance disaster if you don’t strongly stick to conventions.

Callbacks/Anonymous Functions. You can easily throw around functions as parameters with simple syntax. This makes JS a stronger event-based language.

<u>*Ecosystem:*</u>

Package managers like NPM and Bower allow you to easy add and manage dependencies in a project.

Dev tools like Grunt and Gulp allow you to automate your workflow. You can create scripts to build, optimize, clean up and deploy your project.

Node.js is a swiss army knife and it’s like glue for your infrastructure. You can use it as a load balancer, simple HTTP server, or any sort of microservice. You can interface with external programs on the system to create a media encoding server, image processing server, machine learning data-crunching server, etc.

JS on the frontend. JS on that backend. When you’re working with AJAX, JSON and REST APIs, the client-server communication is easy-peazy.

<u>*Marketability:*</u>

JavaScript is “hot” right now. Whether you think it’s a good or bad language, there’s plenty of demand for JS developers on both the frontend and backend.

<u>*Pros using Node.js + Express*</u>

1. Robust technology stack
2. Unlimited scalability and speed
3. Rich ecosystem
4. Strong corporate support
5. Asynchronous event driven IO helps concurrent request handling
6. Uses JavaScript, which is easy to learn
7. Share the same piece of code with both server and client side
8. npm, the Node packaged modules has already become huge, and still growing.
9. Active and vibrant community, with lots of code shared via github etc.
10. You can stream big files.

<u>*Cons using Node.js + Express*</u>

1. Performance bottlenecks and design issues
2. Immaturity of tooling
3. Growing demand for experienced professionals
4. Node.js doesn’t provide scalability. One CPU is not going to be enough; the platform provides no ability to scale out to take advantage of the multiple cores commonly present in today’s server-class hardware.
5. Dealing with relational database is a pain if you are using Node.
6. Every time using a callback end up with tons of nested callbacks.
7. Without diving in depth of JavaScript if someone starts Node, he may face conceptual problem.
8. Node.js is not suited for CPU-intensive tasks. It is suited for I/O stuff only (like web servers).

*<u>Pros using Java/JAX-RS/Tomcat</u>*

1. Java is a staple of enterprise computing
2. Java anchors Android apps development
3. Java continues to evolve
4. Java developers are in great demand
5. JAX-RS excels at defining the routing (using Java annotations) as well as eliminating any restrictions on the service class.

<u>*Cons using Java/JAX-RS/Tomcat*</u>

1. Security issues have tainted Java’s reputation
2. Java competition keeps getting stiffer
3. Android may be a double-edged sword for Java
4. Apple has proved Java can be banned without fallout



### Node.js multi-core server setup

- Node.js uses a Single Threaded Non-blocking strategy to handle asynchronous task. Explain strategies to implement a Node.js based server architecture that still could take advantage of a multi-core Server.

*<u>Strategies</u>*

Cloning - clone the application into multiple instances and have each cloned instance handle part of the workload (with a load balancer, for example).

Decomposing - having multiple, different applications with different code bases and sometimes with their own dedicated databases and User Interfaces

Splitting - into multiple instances where each instance is responsible for only a part of the application’s data. Often named *horizontal partitioning*, or *sharding*, in databases



### Deploying Node.js + Express application

- Explain briefly how to deploy a Node.js/Express application including how to solve the following deployment problems:
  - Ensure that you Node-process restarts after a (potential) exception that closed the application
  - Ensure that you Node-process restarts after a server (Ubuntu) restart
  - Ensure that you can take advantage of a multi-core system
  - Ensure that you can run “many” node-applications on a single droplet on the same port (80)

<u>*Deployment*</u>

Restart your Node.js processes using a process manager, when application is closed or crashed.

Restart your Node.js processes through an init system, like Linux's Systemd, when server restarts.

Run your app in a cluster of processes, to take advantage of a multi-core system

Run a load balancer example like Nginx, to run several Node.js apps on single droplet container on same port.



### Testing Node.js + Express RESTful api

- Explain, using relevant examples, concepts related to testing a REST-API using Node.js + relevant packages 
- Explain, using relevant examples, about testing JavaScript code, relevant packages (Mocha etc.) and how to test asynchronous code.

<u>*Testing REST api*</u>

*Mocha* is a javascript framework for Node.js which allows Asynchronous testing. Let's say it provides the environment in which we can use our favorite assertion libraries to test the code.

*<u>Chai assertion library</u>*

Mocha have the environment for making tests, but we need to test HTTP calls for example? We need an assertion library, that's why mocha is not enough.

<u>*Asynchronous code*</u>

By adding a callback (usually named `done`) to `it()`, Mocha will know that it should wait for this function to be called to complete the test.

Alternately, instead of using the `done()` callback, you may return a [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise). This is useful if the APIs you are testing return promises instead of taking callbacks:

<u>*Mocking HTTP Requests with NOCK*</u>

Often an external resource may require authentication, authorization or may have a rate limiting, when accesing it from your application. Therefore we need to mock it, to make us independent when working on our code to work. This is why you mock HTTP and have the test expectations able to be coded, from the mocked http requests.

<u>*Extra: Unit Testing an AWS Lambda Function*</u>

AWS Lambda is a compute service that lets you run code without provisioning or managing servers.

AWS Lambda executes your code only when needed and scales automatically, from a few requests per day to thousands per second.

At the time you create a Lambda function you specify a *handler*, a function in your code, that AWS (Amazon Web Services) Lambda can invoke when the service executes your code.

This is an easier way to test this then the general way with Mocha and Chai.

<u>*Extra: Getting browser synced correctly, when testing finally server side rendered pages*</u>

Live reloading: This is probably the most important feature of BrowserSync. change your code and the page is auto-reloaded. Live reloading works across many browsers and devices.

Interaction synchronization: It means that all your actions are mirrored across every browser. This little feature is useful for testing, especially, when testing across many devices. You can also customize what actions are mirrored across browsers.

Simulate slower connections: I believe you are expecting users from all over the world, and some countries are not fortunate enough to have fast internet connection; BrowserSync has a feature that you can use to throttle your website connection speed.

URL history: BrowserSync logs all browsing history so you can push a test URL to all devices.

Extra: BrowserSync is compatible with many task runners like [GULP](https://scotch.io/tutorials/automate-your-tasks-easily-with-gulp-js) and [Grunt](https://scotch.io/tutorials/a-simple-guide-to-getting-started-with-grunt). And they work across many operating systems.



### Express middleware, sessions and legal implications

- Explain, using relevant examples, the Express concept: middleware.
- Explain, using relevant examples, how to implement sessions, and the legal implications of doing this.

<u>*Middleware*</u>

Middleware functions are functions that have access to the [request object](http://expressjs.com/en/4x/api.html#req) (`req`), the [response object](http://expressjs.com/en/4x/api.html#res) (`res`), and the next middleware function in the application’s request-response cycle. The next middleware function is commonly denoted by a variable named `next`.

Route middleware is an extremely powerful tool in Node.js and Express. As an example of how powerful Express's route middleware can be, the awesome Passport.js that handles authentication is a route middleware tool.

<u>*Sessions*</u>

A few major problems arose with this method of authentication.

Sessions: Every time a user is authenticated, the server will need to create a record somewhere on our server. This is usually done in memory and when there are many users authenticating, the overhead on your server increases.

Scalability: Since sessions are stored in memory, this provides problems with scalability. As our cloud providers start replicating servers to handle application load, having vital information in session memory will limit our ability to scale.

Token based authentication is stateless. We are not storing any information about our user on the server or in a session.

<u>*Legal implications*</u>

If you are choosing to use cookies and have then follow each HTTP request, you would be needing to obey the laws for cookies. To do that you can use some cookie explaining templates, to be displayed on your website, found here: [Cookie Use in EUROPA](http://ec.europa.eu/ipg/basics/legal/cookies/index_en.htm#section_4)

But, when using tokens:

Every single request will require the token. This token should be sent in the HTTP header so that we keep with the idea of stateless HTTP requests. We will also need to set our server to accept requests from all domains using `Access-Control-Allow-Origin: *`. What's interesting about designating `*` in the ACAO header is that it does not allow requests to supply credentials like HTTP authentication, client-side SSL certificates, or cookies.

The token, not a cookie, is sent on every request and since there is no cookie being sent, this helps to prevent CSRF attacks. Even if your specific implementation stores the token within a cookie on the client side, the cookie is merely a storage mechanism instead of an authentication one. There is no session based information to manipulate since we don’t have a session!

The token, not a cookie, is sent on every request and since there is no cookie being sent, this helps to prevent CSRF attacks. Even if your specific implementation stores the token within a cookie on the client side, the cookie is merely a storage mechanism instead of an authentication one.

The token also expires after a set amount of time, so a user will be required to login once again. This helps us stay secure. There is also the concept of [token revocation](https://tools.ietf.org/html/rfc7009) that allows us to invalidate a specific token and even a group of tokens based on the same authorization grant.



### Session control with clusters

- Explain (conceptually) how you would handle sessions if you run your app in clusters to solve some of problems related to deployment.

<u>*Tokens to solve sessions on clusters*</u>

Tokens stored on client side. Completely stateless, and ready to be scaled. Our load balancers are able to pass a user along to any of our servers since there is no state or session information anywhere.

If we were to keep session information on a user that was logged in, this would require us to keep sending that user to the *same server that they logged in at* (called session affinity).

This brings problems since, some users would be forced to the same server and this could bring about a spot of heavy traffic.

Not to worry though! Those problems are gone with tokens since the token itself holds the data for that user.

<u>*JSON Web Tokens*</u>

JSON Web Tokens (JWT), pronounced "jot", are a standard since the information they carry is transmitted via JSON. We can read more about the [draft](http://self-issued.info/docs/draft-ietf-oauth-json-web-token.html), but that explanation isn't the most pretty to look at.

JSON Web Tokens work across different programming languages: JWTs work in .NET, Python, Node.js, Java, PHP, Ruby, Go, JavaScript, and Haskell. So you can see that these can be used in many different scenarios.

JWTs are self-contained: They will carry all the information necessary within itself. This means that a JWT will be able to transmit basic information about itself, a payload (usually user information), and a signature.

JWTs can be passed around easily: Since JWTs are self-contained, they are perfectly used inside an HTTP header when authenticating an API. You can also pass it through the URL.

<u>*JWT's when?*</u>

If JWTs suck, then what’s a better solution? Plain old sessions!

If you’re building a simple website like the ones described above, then your best bet is to stick with boring, simple, and secure server side sessions. Instead of storing a user ID inside of a JWT, then storing a JWT inside of a cookie: just store the user ID directly inside of the cookie and be done with it.

If your website is popular and has many users, cache your sessions in a backend like memcached or redis, and you can easily scale your service with very little hassle.

Excellent quality web frameworks like Django know this, which is why they operate this way.



### Comparing PUG templates with JSP (Java Server Pages)

- Compare the express strategy toward (server side) templating with the one you used with Java on second semester.
- Demonstrate a simple Server Side Rendering example using a technology of your own choice.

<u>*Main coding difference from JSP way to PUG way*</u>

A PUG file, is made like a template with only one type of coding. That is PUG coding. Before it runs the template, for transpiling into HTML to be sent, all the values are being generated in JavaScript before.

A JSP file, is made on the fly with the values generated through Java code, inside the JSP file. When continuing on in the file, it just prints out the 'static' html written. That means jumps in and out of Java language and HTML language in the file.

I Personally like the PUG way, so much more then JSP way. Because i can make sure to keep alle the functions for getting values from db and computing them, before thinking UI or in general name 'View'.

<u>*Demonstration of server side rendering*</u>

Next, let's create a super-simple template:

```jade
html  
  head
    title= title
  body
    h1= message
```

Create a `views` directory and save the above file as `views/index.pug`.

Now let's make our `index.js` file:

```javascript
var express = require('express');  
var app = express();  
app.set('view engine', 'pug');

app.get('/', function (req, res) {  
    res.render(
        'index',
        { title: 'First Title ever!', message: "Hello World! I'm finally here."})
});

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
});
```

The HTML that gets rendered to <http://localhost:3000/> should look like this:

```html
<html>  
    <head>
        <title>First Title Ever!</title>
    </head>
    <body>
        <h1>Hello World! I'm finally here.</h1>
    </body>
</html>  
```

Instead of having to write brackets as well as opening and closing tags, you can just write the tag name.

Any dynamic parts you need can just be handed to the rendering engine as an object.



### NoSQL databases vs. SQL databases

- Explain, using relevant examples, different ways to mock out databases, HTTP-request.
- Explain, briefly, what is meant by a NoSQL database.
- Explain Pros & Cons in using a NoSQL database like MongoDB as your data store, compared to a traditional Relational SQL Database like MySQL.

<u>*Mocking databases*</u>

First of all I support the opinion of the link to the discussion in my sources, about not mocking databases fully.

What's better in this life than having a database mocking, for our api-mocking! db-mock, is an engine that is perfect for simulating a database, with a very simple setup, you can have a db-like and an api-mocks in matter of minutes. If you mock you api using Node and Express, db-mock will make your life 10x easier!

<u>*NoSQL Databases*</u>



### Mongoose and MongoDB

- Explain how databases like MongoDB can be classified in the NoSQL world
- Explain reasons to add a layer like Mongoose, on top on of a schema-less database like MongoDB
- Explain the benefits from using Mongoose, and provide an example involving all CRUD operations



### Basic Web Security?

- Explain basic security terms like authentication, authorization, confidentiality, integrity, SSL/TLS and provide examples of how you have used them (2-3. semester related).



### Preventing destroying third party code injections

- How can we "prevent" third party code used, in either our Java or NodeJS applications, from injecting dangerous code into our code base?



### The Node.js tools Helmet and Node Security Project

- Explain about Node tools like Helmet and nsp (the Node Security Project). What do they do, and how have you used them.



### XSS, CSRF and SQL Injection

- Explain basic security threads like:
  - Cross Site Scripting (XSS)
  - Cross-Site Request Forgery (CSRF)
  - SQL Injection

