export default class LoginRequest
{
  constructor(newEmail, newPassword){
      this.email = newEmail;
      this.password = newPassword;
  }

  get Email(){
      return this.email;
  }
  set Email(newEmail){
      this.email = newEmail;
  }

  get Password(){
    return this.password;
  }
  set Password(NewPassword){
      this.password = NewPassword;
  }
}