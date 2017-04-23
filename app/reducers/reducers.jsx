var uuid = require('node-uuid');
export var searchTextReducer = (state = '', action) => {
  switch (action.type){
    case 'SET_SEARCH_TEXT':
      return action.searchText;
    default:
      return state;
  };
};

export var modalFormReducer = (state = {}, action) => {
  switch (action.type){
    case 'OPEN_MODAL':
     return action.modalForm;
    default:
      return state;
  };
};

export var authReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};

export var contactsReducer = (state = [], action) => {
  switch (action.type){
    case 'ADD_CONTACTS':
      return [
        ...state,
        ...action.contacts
      ];
    case 'REMOVE_CONTACT':
      return state.filter((contact) => {
        return contact.id !== action.id;
      });
    case 'ADD_CONTACT':
      return [
        ...state,
        {
          id: uuid(),
          name: action.contact.name,
          number: action.contact.number,
          checked: false
        }
      ];
    case 'REMOVE_ALL':
      return [];
    case 'UPDATE_CONTACT': {
      console.log('Inside reducer',action.contact);
      return state.map((contact) => {
        if (contact.id === action.contact.id){
          return {
            ...action.contact
          }
        } else {
          return contact;
        }
      });
    }
    case 'REMOVE_SELECTED':
      return state.filter((contact) => {
        return !contact.checked;
      });
    case 'TOGGLE_CHECK':
      return state.map((contact) => {
        if (contact.id === action.id){
          var toggleChecked = !contact.checked;

          return {
            ...contact,
            checked: toggleChecked
          }
        } else {
          return contact;
        }
      });
    case 'LOGOUT':
      return [];
    default:
      return state;
  }
};
