export default class RegisterResponse
{
  constructor(Token, NewError){
      this.token = Token;
      this.error = NewError;
  }

  get Token(){
      return this._Username;
  }
  set Token(Token){
      this.token = Token;
  }

  get Error(){
    return this.error;
  }
  set Error(newError){
      this.error = newError;
  }
}