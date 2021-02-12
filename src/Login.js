import React from 'react';
import swal from 'sweetalert';
import Taxi from './Taxi';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const LoginSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too short!!')
        .max(15, 'Too long!!')
        .required('Required'),
    password: Yup.string()
        .min(2, 'Too short!!')
        .max(15, 'Too long!!')
        .required('Required')
});
class Login extends React.Component {
    
    onSubmit = (values) => {
        let usname = values.username;
        let pwd = values.password;
        Taxi.login(usname, pwd)
            .then(response => {
                swal("Login successfull!", response.data.message, "success");
                this.props.history.push("/home");
            }).catch(error => {
                swal("Login failed!", "You provided invalid data!", "error");
            });
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
                    <Formik
                        initialValues={{
                            username: "",
                            password: ""
                        }}
                        validationSchema={LoginSchema}
                        onSubmit={this.onSubmit} 
                        >
                        {({ errors, touched }) => (<Form>
                            <div className="jumbotron">
                                <div className="form-group">
                                    <label for="exampleInputEmail1" id="label1">Email/Contact Number</label>
                                    <Field name="username" type="text" className="form-control" id="username" aria-describedby="emailHelp" />
                                    <small id="emailHelp" className="form-text text-muted">Enter mail-id or contact number</small>
                                    {errors.username ? (
                                        <div>{errors.username}</div>
                                    ) : null}
                                </div>
                                <div className="form-group">
                                    <label for="exampleInputPassword1" id="label1">Password</label>
                                    <Field name="password" type="password" className="form-control" id="pwd" />
                                    {errors.password ? (
                                        <div>{errors.password}</div>
                                    ) : null}


                                </div>
                                <button type="submit" className="btn btn-primary">Verify</button>
                            </div>
                        </Form>
                        )}
                    </Formik>
                </div>
                <div className="col-4"></div>
            </div>
            <h3>  New users please register</h3>
            < Link to="/register">Register</Link>

        </div>

    );
}
}
export default withRouter(Login);