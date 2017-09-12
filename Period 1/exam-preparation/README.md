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

##### Variable hoisting

What is hoisting in JavaScript? Hoisting is the JavaScript interpreter's action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted. Any assignments are left where they are.

Variable declarations are one of the most basic aspects of any programming language. However, JavaScript has a little quirk, known as *hoisting*, which can turn an innocent looking declaration into a subtle bug. This article explains what hoisting is, and how you can avoid being burned by it.

JavaScript is an extremely flexible language, and will happily allow you to declare a variable almost anywhere. For example, the following immediately-invoked function expression (IIFE) declares three variables and then displays them using an alert dialog box. As a side note, you should never use alert boxes, but we’re trying to prove a point here.

```javascript
(function() {
  var foo = 1;
  var bar = 2;
  var baz = 3;

  alert(foo + " " + bar + " " + baz);
})();
```

This looks like sane JavaScript code. As expected, it displays the string `"1 2 3"`. Now, assume that the alert is moved, as shown below.

```javascript
(function() {
  var foo = 1;
  alert(foo + " " + bar + " " + baz);
  var bar = 2;
  var baz = 3;
})();
```

If someone actually wrote this code, it was probably by mistake. Clearly, the alert takes place before `bar` and `baz` are declared. However, this is perfectly valid JavaScript, which does not generate an exception. Instead, the alert displays `"1 undefined undefined"`.

Based on our previous experiment, it seems that you can reference variables that don’t exist yet. Now, let’s take the same IIFE, but remove the `baz` declaration altogether, as shown below. Suddenly, we have a `ReferenceError` because `baz` is not defined.

```javascript
(function() {
  var foo = 1;
  alert(foo + " " + bar + " " + baz);
  var bar = 2;
})();
```

This is truly interesting behavior. To understand what’s going on here, you have to understand hoisting. Hoisting is the JavaScript interpreter’s action of moving all variable and function declarations to the top of the current scope. However, only the actual declarations are hoisted. Any assignments are left where they are. Therefore, our second example IIFE actually translates to the following code.

```javascript
(function() {
  var foo;
  var bar;
  var baz;

  foo = 1;
  alert(foo + " " + bar + " " + baz);
  bar = 2;
  baz = 3;
})();
```

Now it makes sense why the second example didn’t generate an exception. After hoisting, `bar` and `baz` are actually declared before the alert statement, albeit with undefined values. In the third example, `baz` was removed completely. Therefore, there was nothing to hoist, and the alert statement resulted in an exception.

##### Function Hoisting

As previously mentioned, function declarations are also hoisted. However, functions that are assigned to variables are not hoisted. For example, the following code will work as expected due to function declaration hoisting.

```javascript
foo();

function foo() {
  alert("Hello!");
}
```

However, the following example will fail spectacularly. The variable declaration for `foo`is hoisted before the function call. However, since the assignment to `foo` is not hoisted, an exception is thrown for trying to call a non-function variable.

```javascript
foo();

var foo = function() {
  alert("Hello!");
};
```



###### <u>'this' in JavaScript and how it differs from what we know from Java/.net.</u>

JavaScript has a special keyword to give access to a specific context. The, this keyword can be used to access values, methods, and other objects on a context specific basis. Meaning, 'this' changes based on where it is used.

There is 4 ways this can take a value.

- In normal function calls
- Within methods on objects
- Within an object that has been constructed
- A function invoked with .call, .apply, or bind

Examples for the first three ways showed:

(In normal function call)

```javascript
function helloWorld() {
    console.log("Hello world!");
  	console.log(this);
};

helloWorld();

```

This example give us this in the browser console:

![Screen Shot 2017-09-11 at 14.20.13](/Users/schelde/Desktop/Screen Shot 2017-09-11 at 14.20.13.png)

(Within method on object)

```javascript
var Portland = {
  bridges: 12,
  airport: 1,
  soccerTeams: 1,
  logNumberOfBridges: function() {
    console.log("There are " + this.bridges + " bridges in Portland!");
  }
}

Portland.logNumberOfBridges();
```

This example giv us this in the browser console:



###### <u>Function Closures and the JavaScript Module Pattern</u>



###### <u>Immediately-Invoked Function Expressions (IIFE)</u>



###### <u>JavaScripts Prototype</u>



###### <u>User defined Callback Functions</u>



###### <u>Explain the methods map, filter and reduce</u>



###### <u>Provide examples of user defined reusable modules implemented in Node.js</u>



# ES6-6 and TypeScript

###### <u>Provide examples and explain the es2015 features: let, arrow functions, this, rest parameters, de-structuring assignments, maps/sets etc.</u>



###### <u>Explain and demonstrate how es2015 supports modules (import and export) similar to what is offered by NodeJS.</u>



###### <u>Provide an example of ES6 inheritance and reflect over the differences between Inheritance in Java and in ES6.</u>



###### <u>Provide examples with es6, running in a browser, using Babel and Webpack.</u>



###### <u>Provide an number of examples to demonstrate the benefits of using TypeScript, including, types, interfaces, classes and generics.</u>

