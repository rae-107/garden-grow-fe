import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
// import { ApolloProvider, ApolloClient } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  // <ApolloProvider client={client}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  // </ApolloProvider>
);

