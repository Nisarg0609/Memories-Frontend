import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { compose, applyMiddleware, createStore } from "redux";
import reducer from "./redux/reducer/reducer";
import { thunk } from "redux-thunk";

const store = createStore(reducer, compose(applyMiddleware(thunk)));

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
