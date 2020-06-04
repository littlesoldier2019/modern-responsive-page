import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsContextProvider from './contexts/NewsContext';
import ProductContextProvider from './contexts/ProductContext';

ReactDOM.render(
  <React.StrictMode>
    <NewsContextProvider>
      <ProductContextProvider>
        <App />
      </ProductContextProvider>
    </NewsContextProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

