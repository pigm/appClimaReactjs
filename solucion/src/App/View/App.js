import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import RegisterScreen from './Register/RegisterScreen';
import LoginScreen from './Login/LoginScreen';
import '../Assets/AppStyles/app.css';
import logo from '../Assets/AppStyles/ic_logo.svg';

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
          <img src={logo} className="Nav-logo" alt="logo" />
          <li class="nav-item" className="Nav-tabs"> 
            <a class="nav-link"><Link className="LabNavStyle" to="/Login">Login</Link> </a>
          </li>
          
          <li class="nav-item" className="Nav-tabs">
            <a class="nav-link"><Link className="LabNavStyle" to="/Registro">Registarse</Link>  </a>
          </li>
        </ul>      
        <Route path="/Login" component={Login}/>
        <Route path="/Registro" component={Registro}/>        
      </nav>
    );
  }
}

export default App;