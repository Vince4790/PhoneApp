var redux = require('redux');
var {searchTextReducer, contactsReducer} = require('reducers');

export var configure = (initialState = {}) => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    contactsReducer: contactsReducer
  });

  var store = redux.createStore(reducer, initialState, redux.compose(
    window.devToolsExtension ? window.devToolsExtension() : f => f
  ));

  return store;
};
