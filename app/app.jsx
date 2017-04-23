var React = require('react');
var ReactDom = require('react-dom');
var {Provider} = require('react-redux');
var {hashHistory} = require('react-router');

var actions = require('actions');
var store = require('configureStore').configure();
import firebase from 'app/firebase/';
import router from 'app/router/';

// Load bootstrap
const bootstrap = require('bootstrap');
require('bootstrap/dist/css/bootstrap.css');

firebase.auth().onAuthStateChanged((user) => {
  if (user) {
    store.dispatch(actions.login(user.uid));
    store.dispatch(actions.startAddContacts());
    hashHistory.push('/contacts');
  } else {
    store.dispatch(actions.logout());
    hashHistory.push('/');
  }
});

ReactDom.render(
  <Provider store={store}>
    {router}
  </Provider>,
  document.getElementById('app')
);
