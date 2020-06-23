import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NewsContextProvider from './contexts/NewsContext';
import ProductContextProvider from './contexts/ProductContext';
import Firebase, { FirebaseContext } from './contexts/firebase';

ReactDOM.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <NewsContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </NewsContextProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

