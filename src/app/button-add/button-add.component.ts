
import { Component, OnInit } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormBuilder, Validators, FormControl, FormArray, NgForm } from '@angular/forms';
import { v4 as uuid } from 'uuid';
import { Direction } from './direction.enum';
@Component({
  selector: 'app-button-add',
  templateUrl: './button-add.component.html',
  styleUrls: ['./button-add.component.css']
})
export class ButtonAddComponent implements OnInit {

 addForm: FormGroup;

  rows: FormArray;
  itemForm: FormGroup;

  public first = true;
  public firstbtn = true;
  public Secound = true;
  public Secoundbtn = true;
  public third = true;
  public thirdbtn = true;
  public row: any;


  Formgroup: FormGroup;
  Form: any;

  public list: string[] = [];
  // tslint:disable-next-line:typedef
  public gen() {
    console.log(typeof uuid());
    this.list.push(uuid());
  }

  constructor(private fb: FormBuilder) {


    this.addForm = this.fb.group({
      items: [null, Validators.required],
      items_value: ['no', Validators.required]
    });

    this.rows = this.fb.array([]);


  }

  // tslint:disable-next-line:use-lifecycle-interface
  // tslint:disable-next-line:typedef
  ngOnInit() {


    // this.Form = new FormGroup({
    //   contactform: new FormArray([
    //     new FormControl('qty'),


    //   ])
    // });

    this.addForm.get('items').valueChanges.subscribe(val => {
      if (val === true) {
        this.addForm.get('items_value').setValue('yes');

        this.addForm.addControl('rows', this.rows);
      }
      if (val === false) {
        this.addForm.get('items_value').setValue('no');
        this.addForm.removeControl('rows');
      }
    });
  }
  // tslint:disable-next-line:typedef
  addQuantity() {
    console.log(typeof uuid());

    this.Form.get('contactform').push(new FormControl(), uuid());
    console.log(this.Form.get('contactform').push(new FormControl()))
  }


  // tslint:disable-next-line:typedef
  onAddRow() {
    this.rows.push(this.createItemFormGroup());
  }

  // tslint:disable-next-line:typedef
  onRemoveRow(rowIndex: number) {
    this.rows.removeAt(rowIndex);
  }

  createItemFormGroup(): FormGroup {
    return this.fb.group({
      name: null,
      description: null,
      qty: null
    });
  }
}
