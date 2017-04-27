var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';
require('bootstrap-validator');

export var Nav = React.createClass({
  handleAdd: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(actions.openModalForm({
      title: 'Add contact',
      actionType: 'ADD_CONTACT'
    }));
  },
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  render: function(){
    var {dispatch} = this.props;
    return (
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">PhoneApp</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
        <li>
          <form className="navbar-form navbar-left">
            <div className="form-group">
              <input type="text" ref="searchText" className="form-control" placeholder="Search"/>
            </div>
            <button type="button" className="btn btn-default glyphicon glyphicon-search"
              onClick={() => {
                var searchText = this.refs.searchText.value;
                dispatch(actions.setSearchText(searchText));
              }}>

            </button>
          </form>
        </li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li>
          <button type="button" className="btn btn-primary btn-md" data-toggle="modal" data-target="#contact-modal" style={{marginTop: '7px'}} onClick={this.handleAdd}>
            New Contact
          </button>
        </li>
        <li><a href="#" data-toggle="tooltip" onClick={this.onLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
});

export default Redux.connect(
  (state) => {
    return state;
  }
)(Nav);
