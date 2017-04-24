var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var Nav = React.createClass({
  onLogout(e) {
    var {dispatch} = this.props;
    e.preventDefault();
    dispatch(actions.startLogout());
  },
  render: function(){
    return (
      <nav className="navbar navbar-default">
  <div className="container-fluid">
    <div className="navbar-header">
      <a className="navbar-brand" href="#">PhoneApp</a>
    </div>

    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul className="nav navbar-nav">
        <li className="active"><a href="#">Home <span className="sr-only">(current)</span></a></li>
      </ul>
      <ul className="nav navbar-nav navbar-right">
        <li><a href="#" onClick={this.onLogout}>Logout</a></li>
      </ul>
    </div>
  </div>
</nav>
    );
  }
});

export default Redux.connect()(Nav);
