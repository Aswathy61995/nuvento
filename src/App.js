import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Home from './Home';
import Register from './Register';
import './Login.css';
import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'
class App extends React.Component {
 render(){
  return (
    
     <BrowserRouter>
     <div className="App">
      {/* <div>
       < Link to="/">Login</Link>
       < Link to="/home">Home</Link>
      </div>
      <div> */}
      <Switch>
          <Route path="/" exact={true}>
            <Login/>
          </Route>
          <Route path="/home" exact={true} >
            <Home/>
          </Route>
          <Route path="/register" exact={true} >
            <Register/>
          </Route>
        </Switch>


      </div>
      </BrowserRouter>
      
    //</div>
  );
}
}

export default App;
