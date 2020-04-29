import LoginMessage from './LoginMessage'
import Validation from '../../Util/Validation'
import DataManager from '../../Util/DataManager'
import LoginRequest from '../../Model/LoginModel/LoginRequest';
import LoginResponse from '../../Model/LoginModel/LoginResponse';
import ServiceDelegate from '../../Service/Delegate/ServiceDelegate'

export default class LoginBusiness
{
    static async accessSession(username, password) {
      var result = false;
      if (
        (username != null || username !== '') &&
        Validation.validateEmail(username) &&
        (password != null && password !== '')
      ) {
        var loginRequestObject = new LoginRequest(username, password);
        var response = await ServiceDelegate.apiLogin(loginRequestObject);
        if (response.success) {
          if (response.responseBody === null) {
            alert(LoginMessage.MESSAGE_DIALOG_INVALIDDATA)
          } else {
            try {
              var jsonResponse = JSON.stringify(response.responseBody["token"]);
              console.log(jsonResponse);
              if (jsonResponse !== null) {
                var objectLoginResponse = new LoginResponse(jsonResponse.token);
                DataManager.ResponseLogin = objectLoginResponse;
                result = true;
                alert("Usuario correcto"); 
              }
            } catch{
              alert(LoginMessage.MESSAGE_DIALOG_INVALIDDATA);
            }
          }
        } else {
          switch (response.statusCode) {
            case -100:
              alert(LoginMessage.MESSAGE_DIALOG_INVALIDDATA);
              break;
            default:
              alert(LoginMessage.MESSAGE_DIALOG_SYSTEMERROR);
              break;
          }
        }
      } else {
        alert(LoginMessage.MESSAGE_DIALOG_INVALIDDATA);
      }
      return result;
    }
}
