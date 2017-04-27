var React = require('react');
import * as Redux from 'react-redux';

import Contact from 'Contact';
import ContactSearch from 'ContactSearch';
import ContactList from 'ContactList';
import ModalForm from 'ModalForm';
import ConfirmForm from 'ConfirmForm';
import Nav from 'Nav';

export var PhoneBookApp = React.createClass({
  render: function(){
    return (
      <div>
      <Nav/>
      <div className="container">
        <ModalForm/>
        <ConfirmForm/>
        <ContactList/>
      </div>
      </div>
    )
  }
});

export default Redux.connect()(PhoneBookApp);
