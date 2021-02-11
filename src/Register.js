import React from 'react';
import Taxi from './Taxi';
import swal from 'sweetalert';
import {withRouter} from 'react-router';
class Register extends React.Component {
    state = {
        accountn0: "",
        username: "",
        password: "",
        confirmPassword: ""
    }
    UsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    PasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    confirmPasswordChange = (event) => {
        this.setState({
            confirmPassword: event.target.value
        })
    }
    accountn0Change = (event) => {
        this.setState({
            accountn0: event.target.value
        })
    }
    onSubmit = (event) => {
        event.preventDefault();
        let username = this.state.username;
        let password = this.state.password;
        let confirmPassword = this.state.confirmPassword;
        let accountn0 = this.state.accountn0;
        let data =Taxi.getDetails();
        if (username in data) {
            swal("Registration failed!! User already exists", "Please Login!", "error");
        } else if (password != confirmPassword) {
            swal("Registration failed!!", "Password and confirmpassword doesnot match", "error");
        }
        else {
            Taxi.addUser(username,password,accountn0);
            swal("Registration successfull!", "You have registerd sucessfully", "success");
            this.props.history.push("/");
        }
    }
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="col-2"></div>
                        <h1>Sign Up</h1>

                    </div>

                </div>
                <div className="row">
                    <div className="col-4"></div>
                    <div className="col-4">
                        <form onSubmit={this.onSubmit}>
                            <div className="jumbotron">
                                <div className="form-group">
                                    <label for="exampleInputEmail1">Email/Contact Number</label>
                                    <input type="text" value={this.state.username} onChange={this.UsernameChange} className="form-control" id="uname" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">Enter mail-id or contact number</small>
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Password</label>
                                    <input type="password" value={this.state.password} onChange={this.PasswordChange} className="form-control" id="pwd" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1"> Confirm Password</label>
                                    <input type="password" value={this.state.confirmPassword} onChange={this.confirmPasswordChange} className="form-control" id="confirmpwd" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1">Accountno</label>
                                    <input type="text" value={this.state.accountn0} onChange={this.accountn0Change} className="form-control" id="accountn0" />
                                </div>
                                <button type="submit" className="btn btn-primary">Register</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
            </div>

        );
    }
}
export default withRouter(Register) ; 