export default class LoginRequest
{
  constructor(newEmail, newPassword){
      this.Email = newEmail;
      this.Password = newPassword;
  }

  get email(){
      return this.Email;
  }
  set email(newEmail){
      this.Email = newEmail;
  }

  get password(){
    return this.Password;
  }
  set password(NewPassword){
      this.Password = NewPassword;
  }
}