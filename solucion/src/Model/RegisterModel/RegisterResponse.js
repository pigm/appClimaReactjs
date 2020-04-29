export default class RegisterResponse
{
  constructor(newToken, NewError){
      this.token = newToken;
      this.error = NewError;
  }

  get Token(){
      return this.token;
  }
  set Token(newToken){
      this.token = newToken;
  }

  get Error(){
    return this.error;
  }
  set Error(newError){
      this.error = newError;
  }
}