import React from 'react';
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
} from '@apollo/client';
import ReactDOM from 'react-dom';
import AppStyle from './App.style';

import App from './App';

const client = new ApolloClient({
  uri: process.env.GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <AppStyle />
    <App />
  </ApolloProvider>,
  document.getElementById('app')
);

module.hot.accept();
