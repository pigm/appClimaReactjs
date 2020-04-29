import ServiceResult  from '../Result/ServiceResult';
import {
  URLlogin, URLregister,
} from '../Properties/ServiceProperties';

export default class ServiceDelegate {
  
  static async apiLogin(loginRquest){
    var serviceResult = new ServiceResult();
      var param = JSON.stringify(loginRquest);
      console.log(param);
        try {
           await fetch(URLlogin, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: param,
          })
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (JSON.stringify(responseJson) != null)
            {
              serviceResult.success = true;
              serviceResult.message = 'Service Authentication ok';
              serviceResult.responseBody = responseJson;
              serviceResult.statusCode = 0;
            }
            else
            {
              serviceResult.success = false;
              serviceResult.message = 'Service Authentication not ok';
              serviceResult.responseBody = null;
              serviceResult.statusCode = -100;
            }
          });
        }
        catch (error)
        {
            serviceResult.success = false;
            serviceResult.message = 'Service Authentication not ok';
            serviceResult.responseBody = null;
            serviceResult.statusCode = -999;
        }    
        console.log(serviceResult);
    return serviceResult; 
  }

  static async apiRegister(registerRquest){
    var serviceResult = new ServiceResult();
      var param = JSON.stringify(registerRquest);
        try {
           await fetch(URLregister, {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: param,
          })
          .then(response => {
            return response.json();
          })
          .then(responseJson => {
            if (JSON.stringify(responseJson) != null)
            {
              serviceResult.success = true;
              serviceResult.message = 'Service Authentication ok';
              serviceResult.responseBody = responseJson;
              serviceResult.statusCode = 0;
            }
            else
            {
              serviceResult.success = false;
              serviceResult.message = 'Service Authentication not ok';
              serviceResult.responseBody = null;
              serviceResult.statusCode = -100;
            }
          });
        }
        catch (error)
        {
            serviceResult.success = false;
            serviceResult.message = 'Service Authentication not ok';
            serviceResult.responseBody = null;
            serviceResult.statusCode = -999;
        }    
    return serviceResult; 
  }
}