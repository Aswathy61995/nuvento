import React from 'react';
import swal from 'sweetalert';
import Taxi from './Taxi';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom'
class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }
    onPay = () => {
        alert("Payment sucessfull")
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
    onSubmit = (event) => {
        event.preventDefault();
        let usname = this.state.username;
        let pwd = this.state.password;
        let data = Taxi.getDetails();

        if (usname in data) {
            let password = data[usname]["password"];
            if (pwd == password) {
               Taxi.setCurrentUser(usname);
                swal("Login successfull!","You provided valid data!", "success");
                this.props.history.push("/home");
             }
            }
        else {
            swal("Login failed!", "You provided invalid data!", "error");
        }
    }


    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-2"></div>
                    <div className="col-8">
                        <div className="col-2"></div>
                        <h1>Welcome To Taxi Booking Service</h1>

                    </div>

                </div>
                <div className="row">
                    <div className="col-4"></div>
                        <div className="col-4">
                      <form onSubmit ={this.onSubmit}>
                        <div className="jumbotron">
                            <div className="form-group">
                                <label for="exampleInputEmail1" id="label1">Email/Contact Number</label>
                                <input type="text" value={this.state.username} onChange={this.UsernameChange} className="form-control" id="uname" aria-describedby="emailHelp" />
                                <small id="emailHelp" className="form-text text-muted">Enter mail-id or contact number</small>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1" id="label1">Password</label>
                                <input type="password" value={this.state.password} onChange={this.PasswordChange} className="form-control" id="pwd" />
                            </div>
                            <button type="submit" className="btn btn-primary">Verify</button>
                            </div>
                        </form>
                    </div>
                    <div className="col-4"></div>
                </div>
              <h3>  New users please register</h3>
              < Link to="/register">Register</Link>
             
            </div>

        );
    }
}
export default withRouter(Login) ;