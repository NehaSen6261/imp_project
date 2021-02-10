import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { ValidationService } from '../validation.service';


interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-steper-form',
  templateUrl: './steper-form.component.html',
  styleUrls: ['./steper-form.component.css']
})
export class SteperFormComponent implements OnInit {

  attr_min_value_of_last_form = false;
  default_of_last_form = true;

  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  lastformary:FormArray;
  
  isEditable = false;

  choose_name_tab = false;

  enable = true;
  enable_1 = true;
  myArray: FormArray;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    this.firstFormGroup = this._formBuilder.group({
      app_name: new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]"),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
        
      ])),
  
      
      app_dese:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),

      app_operation:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),

      app_location:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),

      app_id: new FormControl(''),
    });
    this.secondFormGroup = this._formBuilder.group({
      
      device_name:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),

      device_desc:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),

      app_name: [''],
      device_type:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),
      device_eui:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),
      latitude :  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),
      longitude:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),
      location:  new FormControl({ value: "", disabled: false }, Validators.compose([
        Validators.minLength(3),
        Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      ])),
    });
    
    this.thirdFormGroup = this._formBuilder.group({
      // title: [],
      selling_points: this._formBuilder.array([this._formBuilder.group({
        
        attr_key:  new FormControl('', [Validators.required, Validators.minLength(3),
        ValidationService.cannotContainSpace]),
        attr_data_type:[''],
        attr_default_value:[''],
        attr_uom:[''],
        attr_name:[''],
        attr_min_value:[''],
        attr_max_value:['']
      })])
      
    })

    this.fourthFormGroup= this._formBuilder.group({
      application:[''],
      workcenter:[''],
      assest:['']
    })

  //  this.edit_button()
  }
  

  priceField():FormGroup {
    return this._formBuilder.group({
      attr_key: [''],
      attr_data_type:[''],
      attr_default_value:[''],
      attr_uom:[''],
      attr_name:[''],
      attr_min_value:[''],
          attr_max_value:['']
    });
  }
  get sellingPoints() {
    return this.thirdFormGroup.get('selling_points') as FormArray;
   
  }

  addSellingPoint() {
   this.sellingPoints.push(this._formBuilder.group({
    attr_key: [''],
    attr_data_type:[''],
    attr_default_value:[''],
    attr_uom:[''],
    attr_name:[''],
    attr_min_value:[''],
    attr_max_value:['']
  }));
  
  }

  deleteSellingPoint(index) {
    if(this.sellingPoints.value.length ==1) {
      return false; 

  }

  
  else{
    this.sellingPoints.removeAt(index);
    // this.sellingPoints.splice(x, 1 );
  }
  }

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];
  selectedProfile = this.foods[1]; 

  loginValue: any[] = [
    { value: 'col-1', viewValue: 'Facebook' },
    { value: 'col-2', viewValue: 'Google' },
    { value: 'col-1', viewValue: 'Custom' }
  ];
  selectedProfile_1 = this.loginValue[1]; 

 
  error_messages = {

    'app_name': [
      { type: 'minlength', message: 'Minimum 3 charater require.' },
      { type: 'maxlenght', message: 'Max 40 charater allow.' },
      { type: 'pattern', message: 'can not contain space' },
    ],
    'app_dese': [
      { type: 'minlength', message: 'Minimum 3 charater require.' },
      { type: 'maxlenght', message: 'Max 40 charater allow.' },
      { type: 'pattern', message: 'can not contain space' },
    ],
    'app_operation': [
      { type: 'minlength', message: 'Minimum 3 charater require.' },
      { type: 'maxlenght', message: 'Max 40 charater allow.' },
      { type: 'pattern', message: 'can not contain space' },
    ],
    'app_location': [
      { type: 'minlength', message: 'Minimum 3 charater require.' },
      { type: 'maxlenght', message: 'Max 40 charater allow.' },
      { type: 'pattern', message: 'can not contain space' },
    ],

    'device_desc': [
      { type: 'minlength', message: 'Minimum 3 charater require.' },
      { type: 'maxlenght', message: 'Max 40 charater allow.' },
      { type: 'pattern', message: 'can not contain space' },
    ],

  'device_name': [
    { type: 'minlength', message: 'Minimum 3 charater require.' },
    { type: 'maxlenght', message: 'Max 40 charater allow.' },
    { type: 'pattern', message: 'can not contain space' },
  ],

  'device_type': [
    { type: 'minlength', message: 'Minimum 3 charater require.' },
    { type: 'maxlenght', message: 'Max 40 charater allow.' },
    { type: 'pattern', message: 'can not contain space' },
  ],
  'device_eui': [
    { type: 'minlength', message: 'Minimum 3 charater require.' },
    { type: 'maxlenght', message: 'Max 40 charater allow.' },
    { type: 'pattern', message: 'can not contain space' },
  ],
  'latitude': [
    { type: 'minlength', message: 'Minimum 3 charater require.' },
    { type: 'maxlenght', message: 'Max 40 charater allow.' },
    { type: 'pattern', message: 'can not contain space' },
  ],

  'longitude': [
    { type: 'minlength', message: 'Minimum 3 charater require.' },
    { type: 'maxlenght', message: 'Max 40 charater allow.' },
    { type: 'pattern', message: 'can not contain space' },
  ],

  
  'location ': [
    { type: 'minlength', message: 'Minimum 3 charater require.' },
    { type: 'maxlenght', message: 'Max 40 charater allow.' },
    { type: 'pattern', message: 'can not contain space' },
  ],

  'attr_key': [
    { type: 'minlength', message: 'Minimum 3 charater require.' },
    { type: 'maxlenght', message: 'Max 40 charater allow.' },
    { type: 'pattern', message: 'can not contain space' },
  ],
  }
  enableForm() {
    this.firstFormGroup.get('app_name').enable();
    this.firstFormGroup.get('app_dese').enable();
    this.firstFormGroup.get('app_operation').enable();
    this.firstFormGroup.get('app_location').enable();
    this.firstFormGroup.get('app_id').disable();

  }
  enableForm_1() {
    this.firstFormGroup.get('app_id').valueChanges
    this.firstFormGroup.get('app_name').disable();
    this.firstFormGroup.get('app_dese').disable();
    this.firstFormGroup.get('app_operation').disable();
    this.firstFormGroup.get('app_location').disable();
    this.firstFormGroup.get('app_id').enable();

  }



  clearform() {

    this.firstFormGroup.get('app_name').reset()
    this.firstFormGroup.get('app_dese').reset()
    this.firstFormGroup.get('app_operation').reset()
    this.firstFormGroup.get('app_location').reset()
    this.firstFormGroup.get('app_id').enable();
    this.firstFormGroup.get('app_name').enable();
    this.firstFormGroup.get('app_dese').enable();
    this.firstFormGroup.get('app_operation').enable();
    this.firstFormGroup.get('app_location').enable();
  }

  clearform_step_2(){
    this.secondFormGroup.reset();
  }
 max_min_value(event){
  
  if(event.value === 'option3') {
    this.attr_min_value_of_last_form = true;
    this. default_of_last_form= false;
  }

  else{
    this.attr_min_value_of_last_form = false;
    this. default_of_last_form= true;
  }

}

OnSubmit(){
console.log(JSON.stringify (this.firstFormGroup.value))
console.log(JSON.stringify(this.secondFormGroup.value))
console.log(JSON.stringify( this.thirdFormGroup.value))
}


clearform_all() {

  this.firstFormGroup.reset()
  this.secondFormGroup.reset()
  this.thirdFormGroup.reset()
  this.fourthFormGroup.reset()
}

edit_button(){
  this.firstFormGroup = this._formBuilder.group({
    app_name: new FormControl({ value: "Application name", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]"),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
      
    ])),

    
    app_dese:  new FormControl({ value: "Descriptions", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),

    app_operation:  new FormControl({ value: "Operations", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),

    app_location:  new FormControl({ value: "Location", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),

    app_id:  this.selectedProfile_1
  });

  this.secondFormGroup = this._formBuilder.group({
      
    device_name:  new FormControl({ value: "Device Name", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),

    device_desc:  new FormControl({ value: "Device Decripstion", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),

    app_name:  this.selectedProfile,
    device_type:  new FormControl({ value: "device type", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),
    device_eui:  new FormControl({ value: "Device eui", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),
    latitude :  new FormControl({ value: "latitude", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),
    longitude:  new FormControl({ value: "longitude", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),
    location:  new FormControl({ value: "location", disabled: false }, Validators.compose([
      Validators.minLength(3),
      Validators.maxLength(40),Validators.pattern(".*\\S.*[a-zA-z0-9_-]")
    ])),
  });
  
  this.thirdFormGroup = this._formBuilder.group({
    // title: [],
    selling_points: this._formBuilder.array([this._formBuilder.group({
      
      attr_key: ['String'],
      attr_data_type:['String'],
      attr_default_value:['attr default value'],
      attr_uom:['uom'],
      attr_name:['attr ame'],
      attr_min_value:['attr min value'],
      attr_max_value:['attr max value']
    })])
    
  })

  this.fourthFormGroup= this._formBuilder.group({
    application:this.selectedProfile,
    workcenter:this.selectedProfile,
    assest:this.selectedProfile,
  })
 
}


get price() {
  return this.thirdFormGroup.get('thirdFormGroup.sellingPoints') as FormArray;
}


}