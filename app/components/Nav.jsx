var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = () => {
  return (
    <div>
      <h2>Nav Component</h2>
      <IndexLink to="/" activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Get Contacts</IndexLink>
    </div>
  );
};

module.exports = Nav;
