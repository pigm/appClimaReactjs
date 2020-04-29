export default class LoginResponse
{
  constructor(newToken){
      this.token = newToken;
  }

  get Token(){
      return this.token;
  }
  set Token(newToken){
      this.token = newToken;
  }
}