import LoginMessage from './LoginMessage'
import Validation from '../../Util/Validation'
import DataManager from '../../Util/DataManager'
import LoginRequest from '../../Model/LoginModel/LoginRequest';
import LoginResponse from '../../Model/LoginModel/LoginResponse';
import ServiceDelegate from '../../Service/Delegate/ServiceDelegate'

export default class LoginBusiness
{
    constructor(){}
    
    static async accessSession(username, password) {
      var result = false;
      if (
        (username != null || username !== '') &&
        Validation.validateEmail(username) &&
        (password != null && password !== '')
      ) {
        var loginRequestObject = new LoginRequest(username, password);
        var response = await ServiceDelegate.apiLogin(loginRequestObject);
        if (response.Success) {
          if (response.ResponseBody === null) {
            alert(LoginMessage.MESSAGE_DIALOG_INVALIDDATA)
          } else {
            var jsonResponse = JSON.parse(response.ResponseBody);
            var objectLoginResponse = new LoginResponse(
              jsonResponse.token,
              jsonResponse.error,
            );
            DataManager.ResponseLogin = objectLoginResponse;
            if (DataManager.ResponseLogin.Token !== null) {
              result = true;
            }else{
              alert(LoginMessage.MESSAGE_DIALOG_INVALIDDATA);
            }            
          }
        } else {
          switch (response.StatusCode) {
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
