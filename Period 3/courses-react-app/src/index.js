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
const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cjb19xbdv1h9c0122tfh0kdv3' });
const networkInterface = createNetworkInterface({
    uri: httpLink.uri
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