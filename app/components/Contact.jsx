var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var Contact = React.createClass({
  handleDelete: function(){
    var {id, dispatch} = this.props;
    dispatch(actions.removeContact(id));
  },
  toggleCheck: function(){
    var {id, dispatch} = this.props;
    dispatch(actions.toggleCheck(id));
  },
  render: function(){
    var {name, number, checked} = this.props;
    return (
      <div className="container">
        <div className="panel panel-default">
          <div className="panel-body">
            <label>
            <input type="checkbox" checked={checked} onClick={this.toggleCheck}/>
            <h3>{name} {number}</h3>
            <a href="#" data-toggle="tooltip" title="Remove" onClick={this.handleDelete}>Remove</a>
            </label>
          </div>
        </div>
      </div>
    )
  }
});

export default connect()(Contact);
