export var setSearchText = (searchText) => {
  return {
    type: 'SET_SEARCH_TEXT',
    searchText
  };
}

export var addContact = (contact) => {
  return {
    type: 'ADD_CONTACT',
    contact
  };
};

export var toggleCheck = (id) => {
  return {
    type: 'TOGGLE_CHECK',
    id
  }
}

export var addContacts = (contacts) => {
  return {
    type: 'ADD_CONTACTS',
    contacts
  };
};

export var removeAll = () => {
  return {
    type: 'REMOVE_ALL'
  };
};

export var removeSelected = () => {
  return {
    type: 'REMOVE_SELECTED'
  }
}

export var removeContact = (id) => {
  return {
    type: 'REMOVE_CONTACT',
    id
  }
}
