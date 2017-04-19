var React = require('react');
import Contact from 'Contact';
import ContactSearch from 'ContactSearch';
import ContactList from 'ContactList';

var PhoneBookApp = React.createClass({
  render: function(){
    return (
      <div>
        <h1> PhoneBook App</h1>
        <ContactSearch/>
        <ContactList/>
      </div>
    )
  }
});

module.exports =  PhoneBookApp;
