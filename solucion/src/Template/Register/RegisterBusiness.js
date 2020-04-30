import RegisterMessage from './RegisterMessage'
import Validation from '../../Util/Validation'
import DataManager from '../../Util/DataManager'
import RegisterRequest from '../../Model/RegisterModel/RegisterRequest';
import RegisterResponse from '../../Model/RegisterModel/RegisterResponse';
import ServiceDelegate from '../../Service/Delegate/ServiceDelegate'

export default class RegisterBusiness 
{
    constructor(){}
    
    static async userRegister(username, password) {
      var result = false;
      if (
        (username != null || username !== '') &&
        Validation.validateEmail(username) &&
        (password != null && password !== '')
      ) {
        var registerRequestObject = new RegisterRequest(username, password);
        var response = await ServiceDelegate.apiRegister(registerRequestObject);
        if (response.success) {
          if (response.responseBody === null) {
            alert(RegisterMessage.MESSAGE_DIALOG_INVALIDDATA)
          } else {
            var jsonResponse = JSON.parse(response.responseBody);
            var objectRegisterResponse = new RegisterResponse(
              jsonResponse.token,
              jsonResponse.error,
            );
            DataManager.ResponseRegister = objectRegisterResponse;
            if (DataManager.ResponseRegister.Token !== null) {
              result = true;
            }else{
              alert(RegisterMessage.MESSAGE_DIALOG_INVALIDDATA);
            }     
            
            try {
              var jsonResponse = JSON.stringify(response.responseBody["token"]);
              console.log(jsonResponse);
              if (jsonResponse !== null) {
                var objectRegisterResponse = new RegisterResponse(jsonResponse.token);
                DataManager.ResponseRegister = objectRegisterResponse;
                result = true;
                alert("Usuario registrado"); 
              }
            } catch{
              alert(LoginMessage.MESSAGE_DIALOG_INVALIDDATA);
            }
          }
        } else {
          switch (response.statusCode) {
            case -100:
              alert(RegisterMessage.MESSAGE_DIALOG_INVALIDDATA);
              break;
            default:
              alert(RegisterMessage.MESSAGE_DIALOG_SYSTEMERROR);
              break;
          }
        }
      } else {
        alert(RegisterMessage.MESSAGE_DIALOG_INVALIDDATA);
      }
      return result;
    }
}