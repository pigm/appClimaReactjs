import React from 'react';
import '../../Assets/RegisterStyles/registerStyle.css';
import RegisterBusiness from '../../../Template/Register/RegisterBusiness'

export default class RegisterScreen extends React.Component {
  navLogin(e) {
    this.props.history.push({to: '../Login/LoginScreen'});
  }
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
    this.Username = this.Username.bind(this);
    this.Password = this.Password.bind(this);
  }

  Username(user) {
    this.setState({ username: user.target.value });
  }
  Password(pass) {
    this.setState({ password: pass.target.value });
  }


  render() {
    return (
      <div className="App">
        <body className="App-header">
          <p className="LabTitle">Registro</p>
          <div className="FormLogin">
            <label className="LabStyle">Correo</label>
            <br />
            <input
              className="InputStyle"
              type="email"
              placeholder="example@correo.cl"
              value={this.state.username}
              onChange={this.Username} />
            <br />
            <label className="LabStyle">Contraseña</label>
            <br />
            <input
              className="InputStyle"
              type="password"
              placeholder="********************"
              value={this.state.password}
              onChange={this.Password} />
            <br />
          </div>
          <button class="btn btn-primary col-md-3"
              onClick={async () => {
                var response = await RegisterBusiness.userRegister(this.state.username, this.state.password);
                if (response) {
                  //Aqui hay que navegar o redireccionar a la página de home...
                }
              }
              }>
              REGISTRAR
          </button>
        </body>
      </div>

    );
  }
}