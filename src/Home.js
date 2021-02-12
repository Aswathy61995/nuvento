import React from 'react';
import swal from 'sweetalert';
import Taxi from './Taxi';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
const HomeSchema = Yup.object().shape({
    username: Yup.string()
        .min(2, 'Too short!!')
        .max(15, 'Too long!!')
        .required('Required'),
    amount: Yup.string()
        .min(2, 'Too short!!')
        .max(15, 'Too long!!')
        .required('Required'),
        source: Yup.string()
        .min(2, 'Too short!!')
        .max(15, 'Too long!!')
        .required('Required'),
        destination: Yup.string()
        .min(2, 'Too short!!')
        .max(15, 'Too long!!')
        .required('Required'),

});
class Home extends React.Component {
    state = {
        username: "",
        amount: "",
        balance: 0,
        value: "",
        destination: "",
        source: ""

    }
    onPay = (event) => {
        event.preventDefault();
        let uname = this.state.username;
        let amt = Number(this.state.amount);
        let value = this.state.value;
        let source = this.state.source;
        let destination = this.state.destination;
        if (source == "haripad" && destination == "kayankulam") {
            amt = 200;
        }
        else if (source == "trivandrum" && destination == "kochi") {
            amt = this.state.amount = 20

        }
        else {
            alert("exceeded the travel limit")
        }


        Taxi.home(uname, amt, value, source, destination)
            .then(response => {
                this.setState({ balance: response.data.balance });
                swal("Payment sucessfull and Your pick up spot is " + source + " and your destination is " + destination + " vehicle choosen is " + value + "you need to pay" + amt);
            })
            .catch(error => {
                swal("Payment failed!", error.response.data.message, "error");
            });
        // let data = Taxi.getDetails();
        // // let bal = document.querySelector("#bal");
        // if (uname in data) {
        //     data[uname]["balance"] -= amt;
        //     let bal = data[uname]["balance"]
        //     Taxi.saveData();
        //     this.setState({ balance: bal });
        //    swal("Payment sucessfull and Your pick up spot is "+source+" and your destination is "+destination+" vehicle choosen is "+value)

        // }
        // else {
        //     swal("invalid user")
        // }
    }
    UsernameChange = (event) => {
        this.setState({
            username: event.target.value
        })
    }
    AmountChange = (event) => {
        this.setState({
            amount: event.target.value
        })
    }
    handleChange = (event) => {
        this.setState({ value: event.target.value })
    }
    SourceChange = (event) => {
        this.setState({ source: event.target.value })
    }
    DestinationChange = (event) => {
        this.setState({ destination: event.target.value })
    }
    render() {
        return (<div className="container">
            <h1>Wallet Balance :{this.state.balance}</h1>
            <div className="row">
           <div className="col-6">
                <Formik
                    initialValues={{
                        username: "",
                        password: "",
                        source:"",
                        destination:"",
                        value:""
                    }}
                    validationSchema={HomeSchema}
                    onSubmit={this.onSubmit}
                    >
                    {({ errors }) => (<Form>
                        <h3>Payment</h3>
                        <div className="form-group">
                            <label for="" id="home"> Username</label>
                            <Field name="username" value={this.state.username} onChange={this.UsernameChange} type="text" className="form-control" id="uname" />
                        </div>
                        <div className="form-group">
                            <label for="" id="home" >Amount</label>
                            <Field name="amount" value={this.state.amount} onChange={this.AmountChange} type="text" className="form-control" id="amount" disabled />
                        </div>
                        <div className="form-group">
                            <label for="" id="home">Source</label>
                            <Field name="source" type="text" className="form-control" id="source" />
                            <label for="" id="home">Destination</label>
                            <Field name="destination" type="text" className="form-control" id="destination" />
                        </div>
                        <label id="home">Pick your vehicle: </label>
                        <Field name="value">
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="SWIFTDESIRE">SWIFT DESIRE</option>
                            <option value="HONDACITY">HONDA CITY</option>
                            <option value="INNOVA">INNOVA</option>
                            <option value="ALTO">ALTO</option>
                        </select>
                        </Field>
                        <div>
                            <button type="submit" className="btn btn-primary">PAY</button>
                            <h2 id="bal"></h2>
                       </div>
                    </Form>
                    )}
                    </Formik>
                </div>
        </div>
        </div>
        );
    }
}
export default Home;