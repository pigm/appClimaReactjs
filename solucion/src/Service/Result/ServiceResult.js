export default class ServiceResult
{
    constructor(success, message, responseBody, statusCode){
        this._success = success;
        this._message = message;
        this._responseBody = responseBody;
        this._statusCode = statusCode;
    }

    get success(){
         return this._success;
    }
    set success(newSuccess){
         this._success = newSuccess;
    }

    get message(){
        return this._message;
    }
    set message(newMessage){
        this._message = newMessage;
    }

    get responseBody(){
        return this._responseBody;
    }
    set responseBody(newResponseBody){
        this._responseBody = newResponseBody;
    }

    get statusCode(){
        return this._statusCode;
    }
    set statusCode(newStatusCode){
        this._statusCode = newStatusCode;
    }
}
