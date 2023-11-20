import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./Redux/Store/store";
import AppProvider from "./Context/AppContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <AppProvider>
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    </AppProvider>
  </React.StrictMode>
);
