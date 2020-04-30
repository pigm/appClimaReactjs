import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import RegisterScreen from './Register/RegisterScreen';
import LoginScreen from './Login/LoginScreen';


const Registro = () => (
  <div>
     <RegisterScreen/>
  </div>
);

const Login = () => (
  <div>
    <LoginScreen/>
  </div>
);

class App extends Component {
  render() {
    return (
      
      <nav class="navbar-light">
        <ul class="nav nav-tabs">
          <li class="nav-item">
            <a class="nav-link active"><Link to="/Login">Login</Link> </a>
          </li>
          
          <li class="nav-item">
            <a class="nav-link"><Link to="/Registro">Registarse</Link>  </a>
          </li>
        </ul>      
        <Route path="/Login" component={Login}/>
        <Route path="/Registro" component={Registro}/>        
      </nav>
    );
  }
}

export default App;