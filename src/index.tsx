import React from "react";
import "react-calendar/dist/Calendar.css";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./app/app";
import "./style/index.css";
import "./style/modal.css";
import { store } from "./redux/store";
import reportWebVitals from "./reportWebVitals";
import { Header } from "./app/header";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
