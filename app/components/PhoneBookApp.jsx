var React = require('react');
import * as Redux from 'react-redux';

import Contact from 'Contact';
import ContactSearch from 'ContactSearch';
import ContactList from 'ContactList';
import ModalForm from 'ModalForm';
import Nav from 'Nav';
import Footer from 'Footer';

export var PhoneBookApp = React.createClass({
  render: function(){
    return (
      <div>
      <Nav/>
      <div className="container">
        <ModalForm/>
        <ContactSearch/>
        <ContactList/>
      </div>
      <Footer/>
      </div>
    )
  }
});

export default Redux.connect()(PhoneBookApp);
