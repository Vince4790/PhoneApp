var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

var Contact = React.createClass({
  handleDelete: function(){
    var {id, name, number, dispatch} = this.props;
    console.log(id, name, number);
    dispatch(actions.startRemoveContact(id));
  },
  handleEdit: function(){
    var {dispatch, id, name, number} = this.props;
    dispatch(actions.openModalForm({
      actionType: 'UPDATE_CONTACT',
      title: 'Edit contact',
      id: id,
      name: name,
      number: number
    }));
    $('#contact-modal').modal('show');
  },
  toggleCheck: function(){
    var {id, dispatch} = this.props;
    dispatch(actions.toggleCheck(id));
  },
  render: function(){
    var {name, number, checked} = this.props;
    return (
          <div className="row col-md-offset-1">
              <div className="contact-radio col-md-1 text-left">
                <input type="radio" checked={checked} onClick={this.toggleCheck}/>
              </div>
              <div className="contact-panel col-md-6 text-center">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <div className="row">

                    <div className="col-xs-8 text-left">
                      <b>{name}</b>
                    </div>
                    <div className="col-xs-1 text-right">
                      <a href="#" data-toggle="tooltip" title="Edit" onClick={this.handleEdit}>Edit</a>
                    </div>
                    <div className="col-xs-1 text-right">
                      <a href="#" data-toggle="tooltip" title="Remove" onClick={this.handleDelete}>Remove</a>
                    </div>
                    </div>
                  </div>
                  <div className="panel-body text-left">{number}</div>
                </div>
              </div>
          </div>
    )
  }
});

export default connect()(Contact);
