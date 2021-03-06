import * as redux from 'redux';
import thunk from 'redux-thunk';
var {searchTextReducer, contactsReducer, modalFormReducer, authReducer, sortReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    contacts: contactsReducer,
    modalForm: modalFormReducer,
    auth: authReducer,
    sort: sortReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    redux.applyMiddleware(thunk),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
