import React from 'react';
import swal from 'sweetalert';
import Taxi from './Taxi';
class Home extends React.Component {
    state = {
        username: "",
        amount: "",
        balance: 0,
        value:"",
        destination:"",
        source:""
        
    }
    onPay = (event) => {
        event.preventDefault();
        let uname = this.state.username;
        let amt = Number(this.state.amount);
        let value=this.state.value;
        let source=this.state.source;
        let destination=this.state.destination;
        let data = Taxi.getDetails();
        // let bal = document.querySelector("#bal");
        if (uname in data) {
            data[uname]["balance"] -= amt;
            let bal = data[uname]["balance"]
            Taxi.saveData();
            this.setState({ balance: bal });
           swal("Payment sucessfull and Your pick up spot is "+source+" and your destination is "+destination+" vehicle choosen is "+value)

        }
        else {
            swal("invalid user")
        }
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
    handleChange= (event) => {
        this.setState({value: event.target.value})
      }
      SourceChange =(event)=>{
        this.setState({source: event.target.value})
      }
      DestinationChange =(event)=>{
        this.setState({destination: event.target.value})
      }
    render() {
        return (<div className="container">
            <h1>  Wallet Balance :{this.state.balance}</h1>
            <div className="row">
                <form onSubmit={this.onPay}>
                    <div className="col-12">
                        <h3>Payment</h3>
                        <div className="form-group">
                            <label for="" id="home"> Username</label>
                            <input value={this.state.username} onChange={this.UsernameChange} type="text" className="form-control" id="uname" />
                        </div>
                        <div className="form-group">
                            <label  for="" id="home">Amount</label>
                            <input value={this.state.amount} onChange={this.AmountChange} type="text" className="form-control" id="amount" />
                            </div>
                            <div className="form-group">
                            <label  for="" id="home">Source</label>
                            <input value={this.state.source} onChange={this.SourceChange} type="text" className="form-control" id="source" />
                            <label  for="" id="home">Destination</label>
                            <input value={this.state.destination} onChange={this.DestinationChange} type="text" className="form-control" id="destination" />
                            </div>
                    <label id="home">Pick your vehicle: </label>
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="SWIFTDESIRE">SWIFT DESIRE</option>
            <option value="HONDACITY">HONDA CITY</option>
            <option value="INNOVA">INNOVA</option>
            <option value="ALTO">ALTO</option>
          </select>
          <div>
                        <button type="submit" className="btn btn-primary">PAY</button>
                        <h2 id="bal"></h2>
                    </div>
                    </div>
      </form>
                
            </div>
        </div>
        );
    }
}
export default Home;