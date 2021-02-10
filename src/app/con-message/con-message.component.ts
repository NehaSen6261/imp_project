import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ValidationService } from '../validation.service';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'control-message',
  template: '<div *ngIf="errorMessage!==null">{{errorMessage}}</div>'


})
export class ConMessageComponent implements OnInit {
  @Input() control: FormControl;

  constructor() { }

  // tslint:disable-next-line:typedef
  get errorMessage() {
    for (const propertyName in this.control.errors) {
      if (this.control.errors.hasOwnProperty(propertyName) && this.control.touched) {
        return ValidationService.getValidatorsErrorMessage(propertyName, this.control.errors[propertyName]);
      }
    }
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
  }

}
