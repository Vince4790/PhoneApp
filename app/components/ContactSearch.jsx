var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var ContactSearch = React.createClass({
  handleAdd: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    var name = this.refs.name.value;
    var number = this.refs.number.value;
    console.log(name,number);
    dispatch(actions.addContact({
      id: 3,
      name: name,
      number: number,
      checkd: false
    }));
  },

  handleDeleteAll: function(){
    var {dispatch} = this.props;
    dispatch(actions.removeAll());
  },

  handleDeleteSelected: function(){
    var {dispatch} = this.props;
    dispatch(actions.removeSelected());
  },

  render: function(){
    var {dispatch, searchText} = this.props;
    return (
      <div className="container-fluid">
        <div className="row">
        <div className="col-sm-6" >
          <input type='search' className="form-control" ref="searchText" placeholder={searchText} value={searchText}
            onChange={() => {
              var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
            }}/>
          </div>
          <div className="col-sm-6 ">
            <div>
              <button type="button" className="btn btn-info btn-lg"
                data-toggle="modal" data-target="#addContactModal">
                  Add
              </button>
              <div id="addContactModal" className="modal fade" role="dialog">
  <div className="modal-dialog">

    <div className="modal-content">
      <div className="modal-header">
        <button type="button" className="close" data-dismiss="modal">&times;</button>
        <h4 className="modal-title">Add contact form</h4>
      </div>
      <div className="modal-body">
        <div>
        <label>Name:</label>
        <input type="text" ref="name" placeholder="Enter name"/>
        </div>
        <div>
        <label>Contact:</label>
        <input type="text" ref="number" placeholder="Enter number"/>
        </div>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.handleAdd}>Save</button>
      </div>
    </div>

  </div>
</div>
            </div>

            <button type="button" className="btn btn-primary" onClick={this.handleDeleteAll}>Remove All</button>
            <button type="button" className="btn btn-info" onClick={this.handleDeleteSelected}>Remove Selected</button>
          </div>
        </div>
      </div>
    );
  }
});

export default connect(
  (state) => {
    return {
      searchText: state.searchText
    }
  }
)(ContactSearch);
