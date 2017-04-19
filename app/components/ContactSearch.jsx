var React = require('react');
var {connect} = require('react-redux');
var actions = require('actions');

var ContactSearch = React.createClass({
  handleAdd: function(e) {
    e.preventDefault();
    var {dispatch} = this.props;
    dispatch(actions.addContact({
      id: 3,
      name: 'Test User',
      number: 'test-number'
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
      <div>
        <input type='search' ref="searchText" placeholder={searchText} value={searchText}
          onChange={() => {
            var searchText = this.refs.searchText.value;
              dispatch(actions.setSearchText(searchText));
          }}/>
        <button onClick={this.handleAdd}>Add</button>
        <button onClick={this.handleDeleteAll}>Remove All</button>
        <button onClick={this.handleDeleteSelected}>Remove Selected</button>
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
