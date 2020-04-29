import React from 'react';
import logo from '../../Assets/LoginStyles/logo.svg';
import '../../Assets/LoginStyles/loginStyle.css';
import LoginBusiness from '../../../Template/Login/LoginBusiness';


export default class LoginScreen extends React.Component {
  shoot() {
    alert("Great Shot!");
  }
  constructor(props){
    super(props);
    this.state = {
      username: '',
      password: '',      
    };
    this.Username = this.Username.bind(this);
    this.Password = this.Password.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  Username(user) {
    this.setState({username: user.target.value});
  }
  Password(pass) {
    this.setState({password: pass.target.value});
  }
  handleSubmit(event) {
   
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
  
          <p>Login</p>
          <input
            type="text"
            placeholder="Email"       
            value={this.state.username} 
            onChange={this.Username}/>
          <br/>
          <input
            type="text"
            placeholder="Password"  
            value={this.state.password} 
            onChange={this.Password}/>        
      
          <br/>
        
          <button onClick={async () => {
            var response = await LoginBusiness.accessSession(this.state.username, this.state.password);
            if(response){
              //Aqui hay que navegar o redireccionar a la página de home...
            }
          }            
            }>
              INGRESAR
          </button>
        </header>
      </div>
      
    );
  }
}
