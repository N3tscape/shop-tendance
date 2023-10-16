import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
import { getProducts } from "./actions/product.action";
import App from "./App";

import "./index.css";
import { ThemeProvider } from "@material-tailwind/react";

const store = configureStore({
  reducer: rootReducer,
  middleware: [thunk],
  devTools: true,
});

store.dispatch(getProducts());

const root = document.getElementById("root");
const appRoot = createRoot(root);
appRoot.render(
  <Provider store={store}>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </Provider>
);
