var React = require('react');
var {connect} = require('react-redux');
import Contact from 'Contact';
var ContactAPI = require('ContactAPI');

var ContactList = React.createClass({
  render: function(){
    var {contacts, searchText} = this.props;
    var renderContacts = () => {
      if (contacts.length === 0){
        return (
          <h3>No contacts</h3>
        );
      }

      return ContactAPI.filterContacts(contacts, searchText).map((contact) => {
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
