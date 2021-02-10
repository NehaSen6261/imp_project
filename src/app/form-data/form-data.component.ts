import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { json } from '@rxweb/reactive-form-validators';
import { ValidationService } from '../validation.service';

/* tslint:disable: template-no-call-expression */
@Component({
  selector: 'app-form-data',
  templateUrl: './form-data.component.html',
  styleUrls: ['./form-data.component.css']
})
export class FormDataComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  error_messages = {
// tslint:disable-next-line:object-literal-key-quotes
    // 'username':[
    //   { type: 'pattern', message: 'json invaild'}
    // ],
    // tslint:disable-next-line:object-literal-key-quotes
    'email': [
      { type: 'required', message: 'Email is required.' },
      { type: 'minlength', message: 'Email length.' },
      { type: 'maxlength', message: 'Email length.' },
      { type: 'required', message: 'please enter a valid email address.' }
    ],

    // tslint:disable-next-line:object-literal-key-quotes
    'password': [
      { type: 'required', message: 'password is required.' },
      { type: 'pattern', message: 'Password must contain at least one number and one uppercase and lowercase' }
    ],
    // tslint:disable-next-line:object-literal-key-quotes
    'confirmpassword': [
      { type: 'required', message: 'password is required.' },
      { type: 'pattern', message: 'Password must contain at least one number and one uppercase and lowercase' }
    ],
  };
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: new FormControl('', Validators.compose([
        Validators.required,
        // Validators.pattern('(?=.*[{"emai":"abc@gmail.com"}])')
      ])),
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30)
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{7,}')
      ])),
      confirmpassword: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(30),
        Validators.pattern('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{7,}'),

      ])),
    }, {
      validators: this.password.bind(this)
    });
  }

  // tslint:disable-next-line:typedef
  onSubmit() {

    console.log(this.loginForm.value);

    this.clear();
  }

  // tslint:disable-next-line:typedef
  clear() {
   this.loginForm.reset();
  // tslint:disable-next-line:no-string-literal
  //  'y' = this.loginForm.controls['email'].value
  }
  // tslint:disable-next-line:typedef
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmpassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }

}
