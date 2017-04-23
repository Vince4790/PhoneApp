var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');
var $ = require('jquery');

var ModalForm = React.createClass({
  handeSubmitModal: function(e){
    e.preventDefault();
    var {actionType, id} = this.props.modalForm;
    var {dispatch} = this.props;
    if (actionType === 'ADD_CONTACT'){
      dispatch(actions.startAddContact({
        name: this.refs.name.value,
        number: this.refs.number.value,
        checked: false
      }));
    } else if (actionType === 'UPDATE_CONTACT'){
      dispatch(actions.startUpdateContact({
        id, id,
        name: this.refs.name.value,
        number: this.refs.number.value
      }));
    }
  },
  render: function(){
    var {modalForm, dispatch} = this.props;
    var name,number;
    return (
      <div id="contact-modal" className="modal fade" role="dialog">
<div className="modal-dialog">

<div className="modal-content">
<div className="modal-header">
<button type="button" className="close" data-dismiss="modal">&times;</button>
<h4 className="modal-title">{modalForm.title}</h4>
</div>
<div className="modal-body">
  <form className="form-horizontal" role="form">
                    <div className="form-group">
                      <label  className="col-sm-2 control-label">Name</label>
                              <div className="col-sm-10">
                          <input type="text" className="form-control" ref="name"
                          placeholder="Enter name" value={modalForm.name} onChange={()=>{
                            dispatch(actions.openModalForm({
                              ...modalForm,
                              name: this.refs.name.value
                            }));
                          }}/>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="col-sm-2 control-label">Number</label>
                          <div className="col-sm-10">
                          <input type="text" className="form-control" ref="number"
                            placeholder="Enter number" value={modalForm.number} onChange={()=>{
                              dispatch(actions.openModalForm({
                                ...modalForm,
                                number: this.refs.number.value
                              }));
                            }}/>
                      </div>
                    </div>
                  </form>
</div>
<div className="modal-footer">
<button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
<button type="button" className="btn btn-primary" data-dismiss="modal" onClick={this.handeSubmitModal}>Save</button>
</div>
</div>

</div>
</div>
    );
  }
});

export default connect(
  (state) => {
    return state;
  }
)(ModalForm);
