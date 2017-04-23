var React = require('react');
import * as Redux from 'react-redux';


import Contact from 'Contact';
import ContactSearch from 'ContactSearch';
import ContactList from 'ContactList';
import ModalForm from 'ModalForm';
import * as actions from 'actions';

export var PhoneBookApp = React.createClass({
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();

    dispatch(actions.startLogout());
  },
  render: function(){
    return (
      <div className="container text-center">
        <div className="col-xs-1 text-right">
          <a href="#" onClick={this.onLogout}>Logout</a>
        </div>
        <h1> PhoneBook App</h1>
        <ModalForm/>
        <ContactSearch/>
        <ContactList/>
      </div>
    )
  }
});

export default Redux.connect()(PhoneBookApp);
