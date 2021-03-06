import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import SignIn from './components/auth/signIn';
import SignUp from './components/auth/signUp';
import Layout from './components/layout';

import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware()(compose(window.devToolsExtension ? window.devToolsExtension() : f => f)(createStore));

// import 'bootstrap/dist/css/bootstrap.css';
import './style/main.scss';


function main() {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <BrowserRouter>
        <Switch>
          <Layout>
            <Route path='/' exact component={SignIn}/>
            <Route path='/signin' exact component={SignIn}/>
            <Route path='/signup' component={SignUp}/>
          </Layout>
        </Switch>
      </BrowserRouter>
    </Provider>
    , document.querySelector('.app-wrapper'));
}

document.addEventListener('DOMContentLoaded', main);
