var React = require('react');
var {connect} = require('react-redux');
import Contact from 'Contact';
var ContactAPI = require('ContactAPI');

var ContactList = React.createClass({
  render: function(){
    var {contactsReducer, searchText} = this.props;
    var renderContacts = () => {
      if (contactsReducer.length === 0){
        return (
          <h3>No contacts</h3>
        );
      }

      return ContactAPI.filterContacts(contactsReducer, searchText).map((contact) => {
        return (
          <Contact key={contact.id} {...contact}/>
        )
      });
    }

  return (
    <div>
      {renderContacts()}
    </div>
  )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ContactList);
