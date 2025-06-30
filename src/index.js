import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import NewsContextProvider from "./contexts/NewsContext";
import ProductContextProvider from "./contexts/ProductContext";
import Firebase, { FirebaseContext } from "./contexts/firebase";

const root = createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FirebaseContext.Provider value={new Firebase()}>
      <NewsContextProvider>
        <ProductContextProvider>
          <App />
        </ProductContextProvider>
      </NewsContextProvider>
    </FirebaseContext.Provider>
  </React.StrictMode>
);
