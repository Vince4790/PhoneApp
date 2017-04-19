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
      <div>
        <div>
          <input type="checkbox" checked={checked} onClick={this.toggleCheck}/>
        </div>
        <div>
          <h3>{name} {number}</h3>
          <button onClick={this.handleDelete}>Remove</button>
        </div>
      </div>
    )
  }
});

export default connect()(Contact);
