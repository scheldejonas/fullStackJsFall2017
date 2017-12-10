// Libs
import React from 'react';
import { render } from 'react-dom';
import configureStore from './config/configureStore';
import { createNetworkInterface, ApolloClient, ApolloProvider } from 'react-apollo';

// CSS 
import './css/style.css';

// Components
import routes from './router';

// Data
const networkInterface = createNetworkInterface({
    uri: process.env.REACT_APP_GRAPHQL_URL
});
const client = new ApolloClient({networkInterface});
const store = configureStore(client);

// Render
render(
    (
    <ApolloProvider client={client} store={store}>
        {routes}
    </ApolloProvider>
    ),
    document.getElementById('root')
);