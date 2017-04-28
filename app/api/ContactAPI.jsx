var $ = require('jquery');

module.exports = {
  setContacts: function(contacts){
    if ($.isArray(contacts)){
      return contacts;
    }
  },
  sortByNameAsc: function(a,b){
    if (a.name < b.name) {
      return -1;
    } else if (a.name > b.name) {
      return 1;
    } else {
      return 0;
    }
  },
  sortByNameDesc: function(a,b){
    if (a.name > b.name) {
      return -1;
    } else if (a.name < b.name) {
      return 1;
    } else {
      return 0;
    }
  },
  filterContacts: function(contacts,searchText){
    var filteredContacts = contacts;

    filteredContacts = filteredContacts.filter((contact) => {
      var name = contact.name.toLowerCase();
      var number = contact.number.toLowerCase();
      return searchText.length === 0 || name.indexOf(searchText) > -1 || number.indexOf(searchText) > -1;
    });

    filteredContacts.sort(this.sortByNameAsc);

    return filteredContacts;
  }
};
