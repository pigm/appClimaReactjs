export default class Validation {
  

  static validateEmail(Username){
      let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
      if (regexEmail.test(Username)) {
          return true;
      } else {
          return false;
      }
  } 
}