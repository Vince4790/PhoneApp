var $ = require('jquery');

module.exports = {
  setContacts: function(contacts){
    if ($.isArray(contacts)){
      return contacts;
    }
  },
  getContacts: function(){
    var contacts = [
      {
        id: 1,
        name:'Vince',
        number: '123-456-789',
        checked: false
      },
      {
        id: 2,
        name: 'Mike',
        number: '123-323-869',
        checked: false
      }
    ];

    return $.isArray(contacts) ? contacts : [];
  },
  filterContacts: function(contacts,searchText){
    var filteredContacts = contacts;

    filteredContacts = filteredContacts.filter((contact) => {
      var name = contact.name.toLowerCase();
      var number = contact.number.toLowerCase();
      return searchText.length === 0 || name.indexOf(searchText) > -1 || number.indexOf(searchText) > -1;
    });

    return filteredContacts;
  }
};
