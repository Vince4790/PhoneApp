var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
import Contact from 'Contact';
var ContactAPI = require('ContactAPI');

var ContactList = React.createClass({
    sortContacts: function(){
      var {dispatch} = this.props;
      var attr = $('#sort-span').attr('class');
      if (attr === 'glyphicon glyphicon-triangle-top'){
        dispatch(actions.sortByNameDesc());
      } else if (attr === 'glyphicon glyphicon-triangle-bottom'){
        dispatch(actions.sortByNameAsc());
      }
      $('#sort-span').toggleClass('glyphicon-triangle-top glyphicon-triangle-bottom');
    },
    handleDeleteAll: function(){
      var {dispatch} = this.props;
      dispatch(actions.openModalForm({
        actionType: 'REMOVE_ALL',
        title: 'Are you sure you want to delete all contacts ?'
      }));
      $('#confirm-modal').modal('show');
    },

    handleDeleteSelected: function(){
      var {dispatch} = this.props;
      dispatch(actions.openModalForm({
        actionType: 'REMOVE_SELECTED',
        title: 'Are you sure you want to delete selected contacts ?'
      }));
      $('#confirm-modal').modal('show');
    },
  render: function(){
    var {contacts, searchText, dispatch} = this.props;
    var filtered = ContactAPI.filterContacts(contacts, searchText);
    var renderContacts = () => {
      if (contacts.length === 0){
        return (
          <h3 className="text-center">No contacts</h3>
        );
      }

      return filtered.map((contact) => {
        return (
            <Contact key={contact.id} {...contact}/>
        )
      });
    }
  return (
    <div className="panel panel-default contact-list" style={{width: '60%'}}>
        <div className="panel-body">
          <div style={{marginLeft:'40px'}}><h4>{filtered.length} contact(s) found</h4></div>
            <div className="row">
              <div style={{marginLeft:'40px', marginRight: '70px'}} className="col-sm-7 col-md-7">
                <label>Sort by:</label>
                  <button type="button" className="btn btn-default btn-sm" onClick={this.sortContacts}>
                    <span id="sort-span" className="glyphicon glyphicon-triangle-top"></span> Name
                  </button>
              </div>
              <div id="button-remove" className="col-sm-1 col-md-1 dropdown" style={{marginLeft:'15px'}}>
                <button className="btn btn-default dropdown-toggle" type="button" id="removeMenu"
                  data-toggle="dropdown">
                  <span className="glyphicon glyphicon-trash"></span>
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="removeMenu">
                    <li><a href="#" onClick={this.handleDeleteSelected}>Remove Selected</a></li>
                    <li><a href="#" onClick={this.handleDeleteAll}>Remove All</a></li>
                  </ul>
                </div>
          </div>
          <hr/>
          {renderContacts()}
        </div>
    </div>
  )
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ContactList);
