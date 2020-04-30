import React from 'react';
import logo from '../../Assets/LoginStyles/logo.svg';
import '../../Assets/LoginStyles/loginStyle.css';
import LoginBusiness from '../../../Template/Login/LoginBusiness';


export default class LoginScreen extends React.Component {
  shoot() {
    alert("");
  }
  constructor(props) {
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
    this.setState({ username: user.target.value });
  }
  Password(pass) {
    this.setState({ password: pass.target.value });
  }
  handleSubmit(event) {

  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>¡Pronóstico meteorológico de tu ciudad!</p>
        
          <div className="FormLogin">
            <label className="LabStyle">Correo</label>
            <br />
            <input
              className="InputStyle"
              type="text"
              placeholder="Tú correo..."
              value={this.state.username}
              onChange={this.Username} />
            <br />
            <label className="LabStyle">Contraseña</label>
            <br />
            <input
              className="InputStyle"
              type="text"
              placeholder="Tú contraseña..."
              value={this.state.password}
              onChange={this.Password} />

            <br />

            
          </div>
          <button className="ButtonIngresar"
              onClick={async () => {
                var response = await LoginBusiness.accessSession(this.state.username, this.state.password);
                if (response) {
                  //Aqui hay que navegar o redireccionar a la página de home...
                }
              }
              }>
              INGRESAR
          </button>

          <label className="LabRegis">¿No tienes cuenta? Registrate aquí.</label>

        </header>
      </div>

    );
  }
}
