# 1. Periode Exam Preparation | Full-Stack JavaScript

Jeg har skrevet alle links og besvarelse på spørgsmål i dette markdown dokument.

Du kan finde spørgsmålene her: https://goo.gl/WaFga7

# Explain and Reflect

###### <u>Explain differences between Java and JavaScript. You should include both topics related to the fact that Java is a compiled language and JavaScript a scripted language, and general differences in language features.</u>

First of all there is still some similarities. They are both able to do OOP, Object Oriented Programming. 

Let's then go to the differences. Java is a compiled language, which means the code needs to be compiled before it can run.

JavaScript is a scripted functional coding language, that is ready for running the minute you have the js files.

About single programs for a desktop computer javascript are only able to run in the browser or a program built on a browser engine installed on that computer. Java is able to install and run as a independent program. 

About how the language is working, in my opinion, JavaScript's main benefit is that it can be understood by the common human. It is much easier and more robust than Java. It allows for fast creation of web page events. Many JavaScript commands are what are known as Event Handlers: They can be embedded right into existing HTML commands. JavaScript is a little more forgiving than Java. It allows more freedom in the creation of objects. Java is very rigid and requires all items to be denoted and spelled out.

###### <u>Explain the two strategies for improving JavaScript: ES6 (es2015) + ES7, versus Typescript. What does it require to use these technologies: In our backend with Node, in (many different) Browsers</u>

TypeScript set out to solve the problems, when browser compatibility becomes the stopping problem in a particular program. The way it works is making code self explanatory through type definitions on variables. Therefore less or even maybe zero documentation is nescessary for other developers needing in future review/use of your code. Also when having to continue on your code, or even in need to use som public classes of you JavaScript code.

TypeScript then transpiles into a "All Browser" JavaScript, but with no types on as JavaScript in ES5 doesn't have it.

ES2015 offers some modern features like classes and promises, but it  falls short of fully addressing real world development concerns like avoid callbacks, debugging and error handling challenges brought upon by nested code, and still leaving developers to work with a transpiler to reach the widest audience possible. TypeScript is a remarkable piece of technology, offering a world-class integrated development experience. The free and cross-platform Visual Studio Code editor is the icing on the cake.

###### <u>Explain generally about node.js, and when it “makes sense” and npm, and how it “fits” into the node echo system.</u>

Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. 

Node is a runtime or environment. It is not a framework. People (I feel) often get this wrong because frameworks like express are ubiquitous with node.

Node.js is for easily building fast, scalable network applications. 

Node.js uses an event-driven, non-blocking I/O model that makes it lightweight and efficient, perfect for data-intensive real-time applications that run across distributed devices.

npm is short for Node Package Manager and is two things: first and foremost, it is an online repository for the publishing of open-source Node.js projects. Second, it is a command-line utility for interacting with said repository that aids in package installation, version management, and dependency management.

###### <u>Explain about the Event Loop in Node.js</u>

First about the event loop in javascript: The Event Loop is a queue of callback functions. When an async function executes, the callback function is pushed into the queue. The JavaScript engine doesn't start processing the event loop until the code after an async function has executed.

Node.js - Event Loop: Node.js is a single-threaded application, but it can support concurrency via the concept of event and callbacks. Every API of Node.js is asynchronous and being single-threaded, they use async function calls to maintain concurrency. Node uses observer pattern.

So Node.js is an asynchronous platform. It doesn't wait around for things like file I/O to finish - Node.js uses callbacks. 
Just to explain: A callback is a function called at the completion of a given task; this prevents any blocking, and allows other code to be run in the meantime.

###### <u>Explain (some) of the purposes with the tools Babel and WebPack, using  examples from the exercises</u>

First i'll explain what webpack is:
webpack is a module bundler. webpack takes modules with dependencies and generates static assets representing those modules.

Babel is a transpiler to transpile your ES6 code to ES5 code in either CommonJS, AMD, or UMD format. Then it pipes the transpiled code through a module bundler ex. Webpack to create one or more bundled files.

###### <u>Explain the purpose of “use strict” and also Linters, exemplified with ESLint</u>

Firstly, what is it for? The JavaScript strict mode is a feature in ECMAScript 5. You can enable the strict mode by declaring this in the top of your script/function: "  'use strict'  ". 
When a JavaScript engine sees this directive, it will start to interpret the code in a special mode.

Before we understand ESLint, let's firstly understand linters.
It is in general computer programming, that lint is a Unix utility for flagging some suspicious and non-portable constructs (likely to be bugs) in C language source code.
Generically, lint or a linter is any tool that flags suspicious usage in software written in any computer language. So also explained as code linting is a type of static analysis that is frequently used to find problematic patterns or code that doesn't adhere to certain style guidelines.

So what is ESLint and what is the purpose more specific with ESLint?
ESLint is an open source JavaScript linting utility originally created by Nicholas C. Zakas in June 2013.

(Examples here)

# Explain features with code examples

###### <u>Variable/function-Hoisting</u>



###### <u>this in JavaScript and how it differs from what we know from Java/.net.</u>



###### <u>Function Closures and the JavaScript Module Pattern</u>



###### <u>Immediately-Invoked Function Expressions (IIFE)</u>



###### <u>JavaScripts Prototype</u>



###### <u>User defined Callback Functions</u>



###### <u>Explain the methods map, filter and reduce</u>



###### <u>Provide examples of user defined reusable modules implemented in Node.js</u>