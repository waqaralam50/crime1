import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


class Login extends Component {
    render() {
        return (
            <div className="Jumbotron">
            <form>
       <div className="login-box">
       <img src="logo.JPG" className="avatar"/>
<h1>Login Here</h1>
<form>
    <p>Username</p>
    <input type="text" name="username" placeholder="Enter Username"/>
                    <p>Password</p>
                    <input type="text" name="Password" placeholder="Enter Password" />
<input type="submit" name="submit" value="Login"/>
                            <a href="#">Forget Password</a>
                            <br /><br /> <button type="button" class="btn btn-outline-primary btn-lg btn-block" id="baton">Register First</button>

</form>

       </div>
       </form>
       </div>
        );
    }
}

export default Login;
