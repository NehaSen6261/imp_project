import { Injectable } from '@angular/core';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {
  // tslint:disable-next-line:typedef
  static getValidatorsErrorMessage(
    validationName: string, validationValue?: any) {
    const config = {
      // tslint:disable-next-line:object-literal-key-quotes
      'required': 'Required',
      // tslint:disable-next-line:object-literal-key-quotes
      'InvalidName': 'Please Enter Valid Name',
      // tslint:disable-next-line:object-literal-key-quotes
      'InvalidPass': 'Please Enter Valid  Password'
    };
    return config[validationName];
  }

  constructor() { }

  // tslint:disable-next-line:typedef
  static Namevaildators(control) {
    if (control.value.match('^[a-zA-Z]+$')) {
      return null;
    } else {
  // tslint:disable-next-line:object-literal-key-quotes
  return { 'InvalidName': true };
}

}

static cannotContainSpace(control: AbstractControl) : ValidationErrors | null {
  if((control.value as string).indexOf(' ') >= 0){
      return {cannotContainSpace: true}
  }

  return null;
}

// tslint:disable-next-line:typedef
static Passvaildators(control) {
  if (control.value.match('^(?=.*[A-Z].*[A-Z])(?=.*[!@#$&*])(?=.*[0-9].*[0-9])(?=.*[a-z].*[a-z].*[a-z]).{8}$')) {
    return null;
  } else {
// tslint:disable-next-line:object-literal-key-quotes
return { 'InvalidPass': true };
}

}
}
