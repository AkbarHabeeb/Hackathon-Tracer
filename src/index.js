import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from './Layout/App';
// import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css'
// import store from './Reducer/index.js'

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" render={props => <App {...props} />} />
    </Switch>
  </BrowserRouter>,
  document.getElementById("root")
);