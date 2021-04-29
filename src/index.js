import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import './index.css';
import Header from './components/Header'
import App from './App';
import Minion from './pages/Minion';
import Yoda from './pages/Yoda';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path="/" exact component={App} />
        <Route path="/minion" component={Minion} />
        <Route path="/yoda" component={Yoda} />
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
