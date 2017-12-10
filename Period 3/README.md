# <u>Period 3 - Exam Preparation</u>

###### Interesting Quotes of the day:

<u>The trick to maintaining your sanity in these fast-moving times is to learn new stuff right between stages two and three, once your interest is piqued but while you’re still ahead of the curve.</u>

<u>Which is why now is the perfect time to learn what exactly this GraphQL thing you keep hearing about really is.</u>

###### Sources

- <u>https://docs.google.com/document/d/12Ri_Kt8J7a0wNBwbhVnR-jbH9ENAS0EMrfTeGmxsNhQ/edit</u>
- <u>http://graphql.org/learn/</u>
- <u>https://www.youtube.com/watch?v=_9RgHXqH8J0</u>
- <u>http://graphql.org/learn/schema/</u>
- <u>https://www.howtographql.com</u>
- <u>http://graphql.org/graphql-js/</u>
- <u>https://www.howtographql.com/react-apollo/0-introduction/</u>
- https://github.com/CphbusFall2017FullStackJS/hackernews



### GraphQL overview

- **Explain shortly about GraphQL, it purpose and some of it’s use cases**


<u>GraphQL's purpose is to be a query language for your API, and a server-side runtime for executing queries by using a type system you define for your data. GraphQL isn't tied to any specific database or storage engine and is instead backed by your existing code and data.</u>

GraphQL is used together with you JavaScript Express backend server, on the REST API. Your are here able to have one endpoint, that then serves all data fetching.

GraphQL is implemented in so many languages, with libraries for frameworks to those languages already.

The list goes on here: [List of languages to GraphQL](http://graphql.org/code/) 



- **Explain some of the Server Architectures that can be implemented with a GraphQL backend**
  **What is meant by the terms over- and under fetching in relation to REST**


The way it can be setup is 3 different kinds of achitectures:

1. GraphQL server *with a connected database*
2. GraphQL server that is a *thin layer in front of a number of third party or legacy systems* and integrates them through a single GraphQL API
3. A *hybrid approach of a connected database and third party or legacy systems* that can all be accessed through the same GraphQL API

<u>Over- and underfetching is meant to tell, you are spending queries on getting to much data, for the specific client call.</u>

<u>It can have the problem of being to little data, and you then are calling again to get the corresponding data to the view the client is requesting.</u>

It can have the problem of the database query needing to gather to much complex data structures or filters upon the query, when over fetching.



- **Explain shortly about GraphQL’s type system and some of the benefits we get from this**


<u>In basics, it is all about selecting fields on objects to be queried.</u>

[Type System Examples](/Periode%205/graphql-examples.md#type-system)

Out benefits is the writting of query gets pretty readable. 



- **Explain shortly about GraphQL Schema Definition Language, and provide an number of examples of schemas you have defined.**


<u>A Schema definition is to make queries understandable for GraphQL, and they have support for the most concepts.</u>

<u>I have provided the examples of different ways to setup the Schema.</u>

[Schema System Examples](/Periode%205/graphql-examples.md#schema-system)



### GraphQL with React + Apollo

- **Provide a number of examples demonstrating data fetching with GraphQL. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client**


Here is an example from the [playground](https://graphqlbin.com/7qgCz).





- **Provide a number of examples demonstrating creating, updating and deleting with Mutations. You should provide examples both running in a Sandbox/playground and examples executed in an Apollo Client.**




- **Explain the Concept of a Resolver function, and provide a number of simple example of resolvers you have implemented in a GraphQL Server.**




### GraphQL with Graphcool

- **Explain about graphCool and how it fits into the GraphQL world**




- **Demonstrate queries up against a graphCool backend, both via a React/Apollo Client, and from “alternative” clients like a plain node backend and/or Postman.**




- **In an apollo based React Component, demonstrate what is used to to parse the plain GraphQL queries?**




- **In an apollo based React Component, demonstrate where/how a query is injected into the  props of the query, and how the props value gets its name.**




- **Demonstrate a demo Apollo/React - client and point out important things necessary to work with this technology**


