# Period 3 - Exam Preparation

###### Interesting Quotes of the day:

The trick to maintaining your sanity in these fast-moving times is to learn new stuff right between stages two and three, once your interest is piqued but while you’re still ahead of the curve.

Which is why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.

###### Sources

- https://docs.google.com/document/d/12Ri_Kt8J7a0wNBwbhVnR-jbH9ENAS0EMrfTeGmxsNhQ/edit
- http://graphql.org/learn/
- https://www.youtube.com/watch?v=_9RgHXqH8J0
- https://www.howtographql.com
- http://graphql.org/graphql-js/
- https://www.howtographql.com/react-apollo/0-introduction/
- https://github.com/CphbusFall2017FullStackJS/hackernews



### GraphQL overview

- <u>Explain shortly about GraphQL, it purpose and some of it’s use cases</u>


GraphQL's purpose is to be a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.

GraphQL is used together with you JavaScript Express backend server, on the REST API. Your are here able to have one endpoint, that then serves all data fetching.



- <u>Explain some of the Server Architectures that can be implemented with a GraphQL backend</u>
  <u>What is meant by the terms over- and under fetching in relation to REST</u>


GraphQL is implemented in so many languages, with snippets/collections for frameworks to those languages already.

The list goes on here: [List of languages to GraphL](http://graphql.org/code/)

Over- and underfetching is meant to tell, you are spending queries on getting to much data, for the specific client call.

It can have the problem of being to little data, and you then are calling again to get the corresponding data to the view the client is requesting.

It can have the problem of the database query needing to gather to much complex data structures or filters upon the query, when over fetching.



- <u>Explain shortly about GraphQL’s type system and some of the benefits we get from this</u>


In basics, it is all about selecting fields on objects to be queried.

[Type System Examples](/Period%203/graphql-examples.md)





- <u>Explain shortly about GraphQL Schema Definition Language, and provide an number of examples of schemas you have defined.</u>




### GraphQL with React + Apollo

- <u>Provide a number of examples demonstrating data fetching with GraphQL. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client</u>




- <u>Provide a number of examples demonstrating creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.</u>




- <u>Explain the Concept of a Resolver function, and provide a number of simple example of resolvers you have implemented in a GraphQL Server.</u>




### GraphQL with Graphcool

- <u>Explain about graphCool and how it fits into the GraphQL world</u>




- <u>Demonstrate queries up against a graphCool backend, both via a React/Apollo Client, and from “alternative” clients like a plain node backend and/or Postman.</u>




- <u>In an apollo based React Component, demonstrate what is used to to parse the plain GraphQL queries?</u>




- <u>In an apollo based React Component, demonstrate where/how a query is injected into the  props of the query, and how the props value gets its name.</u>




- <u>Demonstrate a demo Apollo/React - client and point out important things necessary to work with this technology</u>


