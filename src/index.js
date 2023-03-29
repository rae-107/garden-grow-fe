import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './Components/App/App';
import { BrowserRouter } from 'react-router-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
const client = new ApolloClient({
  uri:"https://garden-grow-be.herokuapp.com/api/v1/graphql",
  cache: new InMemoryCache()
})
root.render(
 
    <BrowserRouter>
     <ApolloProvider client={client}>
      <App />
     </ApolloProvider>
    </BrowserRouter>
 
);

