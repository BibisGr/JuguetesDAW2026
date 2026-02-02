import {AbstractControl, FormControl, ValidationErrors, ValidatorFn} from '@angular/forms';

export class FormValidators{
  static forbidenNameValidator(nameRe: RegExp):
  ValidatorFn{
    return (control :AbstractControl):
      ValidationErrors | null =>{
      const  forbiden = nameRe.test(control.value);
      return forbiden ? {forbidenName : true}: null;
    }
  }
  static forbidentTextValidator(textRe: RegExp):
    ValidatorFn{
    return (control :AbstractControl):
      ValidationErrors | null =>{
      const  forbiden = textRe.test(control.value);
      return forbiden ? {forbidenName : true}: null;
    }
  }

  static notOnlyWhiteSpaces(control: FormControl):
  ValidationErrors | null {
    if((control.value !=null) &&
    (control.value.trim().length === 0)){
      return {'notOnlyWhiteSpaces': true};
    } else {
      return null
    }
  }

}
