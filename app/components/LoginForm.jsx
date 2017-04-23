var React = require('react');
import * as Redux from 'react-redux';
import * as actions from 'actions';

export var LoginForm = React.createClass({
  onLoginWithGoogle() {
    var {dispatch} = this.props;

    dispatch(actions.startLogin());
  },
  onLoginWithEmailPassword() {
    var {dispatch} = this.props;
    var email = this.refs.email.value;
    var password = this.refs.password.value;
    console.log('Something', email, password);

    dispatch(actions.loginWithEmailPassword('bao.hoang90@icloud.com', 'testpassword'));
  },
  render: function(){
    return (
      <div className="container">
    <div className="row vertical-offset-100">
    	<div className="col-md-4 col-md-offset-4">
    		<div className="panel panel-default">
			  	<div className="panel-heading">
			    	<h3 className="panel-title">Please sign in</h3>
			 	</div>
			  	<div className="panel-body">
			    	<form acceptCharset="UTF-8" role="form">
			    	  	<div className="form-group">
			    		    <input className="form-control" placeholder="E-mail" ref="email" name="email" type="email"/>
			    		</div>
			    		<div className="form-group">
			    			<input className="form-control" placeholder="Password" ref="password" name="password" type="password"/>
			    		</div>
              <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
			      </form>
			    </div>
			</div>
		</div>
	</div>
</div>
    );
  }
});

export default Redux.connect()(LoginForm);
