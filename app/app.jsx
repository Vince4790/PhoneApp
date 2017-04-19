var React = require('react');
var ReactDom = require('react-dom');
var {Provider} = require('react-redux');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

var PhoneBookApp = require('PhoneBookApp');
var actions = require('actions');
var store = require('configureStore').configure();
var ContactAPI = require('ContactAPI');


// Load foundation
// $(document).foundation();
//
// // App css
// require('style!css!sass!applicationStyles')

store.subscribe(() => {
  var state = store.getState();
  console.log('New state:', state);
});

var initialContacts = ContactAPI.getContacts();
store.dispatch(actions.addContacts(initialContacts));

ReactDom.render(
  <Provider store={store}>
    <PhoneBookApp/>
  </Provider>,
  document.getElementById('app')
);
