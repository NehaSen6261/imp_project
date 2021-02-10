import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import * as moment from "moment";
import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  AfterViewInit,
} from '@angular/core';
import {
  MatDateRangeInput,
  MatCalendarCellCssClasses,
  MatDateRangePicker,
} from '@angular/material/datepicker';
import { HttpClient } from '@angular/common/http';
import { ReactiveFormConfig, RxFormBuilder } from '@rxweb/reactive-form-validators';
import { JsonInfo } from '../datepickerrange/date_range';
import { ThemePalette } from '@angular/material/core';
declare var $: any;
@Component({
  selector: 'app-datepickerrange',
  templateUrl: './datepickerrange.component.html',
  styleUrls: ['./datepickerrange.component.css']
})
export class DatepickerrangeComponent implements OnInit {
  local_time = ['2021-02-03 19:16:40.955898', '2021-02-03 19:16:40.955898', '2021-02-03 19:16:40.955898', '2021-02-03 19:16:40.955898', '2021-02-03 19:16:40.955898', '2021-02-03 19:16:40.955898']
  object: Object = {foo: 'bar', baz: 'qux', nested: {xyz: 3, numbers: [1, 2, 3, 4, 5]}};
 
  utc_time = ['2021-02-03 14:02:38.622824',
'2021-02-03 14:02:38.622824',
'2021-02-03 14:02:38.622824',
'2021-02-03 14:02:38.622824',
'2021-02-03 14:02:38.622824',
'2021-02-03 14:02:38.622824',
'31/12/2016 14:02:38.622824']
  form: FormGroup;
 

  // @ViewChild(MatDateRangeInput) private rangeInput: MatDateRangeInput<Date>;
  // @ViewChild(MatDateRangePicker) private rangePicker: MatDateRangePicker<Date>;

  constructor(public fb: FormBuilder, public formBuilder: RxFormBuilder, 
    private http: HttpClient) {

  
  }

 public date_exm 
  
  datef(){
  
    for (let i=0;i<=this.utc_time.length;i++){
      console.log(JSON.stringify( this.utc_time[i]),"array---->")
       this.date_exm = moment.utc(this.utc_time[i]).toDate()
      console.log(this.date_exm ,"indian time")
      // console.log(JSON.stringify( this.utc_time[1]),"array1")
      // console.log(JSON.stringify( this.utc_time[2]),"array2")
      // console.log(JSON.stringify( this.utc_time[3]),"array3")
    }

  }
  

  ngOnInit(): void {
    // this.form = this.fb.group({
    //   daterange: new FormGroup({
    //     start: new FormControl(),
    //     end: new FormControl(),
    //   }),
    // });
    $(function() {
      $('[data-toggle="tooltip"]').tooltip()
    });
  
    this.datef()
  
    ReactiveFormConfig.set({
     'validationMessage': {
        
        'json': 'Invalid Json format',
      }
    });

    // this.http.get('assets/json_obj.json').subscribe(jsonInfo => {
    //   this.form = this.formBuilder.formGroup<JsonInfo>(JsonInfo, jsonInfo);
    // });


    const jsonInfo = new JsonInfo();
    this.form = this.formBuilder.formGroup(jsonInfo);

  }




onSubmit() {
  console.log(this.form.value);
}

unavailableDays(calendarDate: Date): boolean {
  return calendarDate < new Date();
}


buttonColor: ThemePalette = 'primary';



cellClass(date: Date): MatCalendarCellCssClasses {
  return date < new Date() ? 'test-cell-class' : 'test-another-cell-class';
}
activeState = 'Any';

states = [
  
  'Any',
  'TCP',
  'UDP',
  'ICMP',

]

setStateAsActive(state) {
  this.activeState = state;
}
}
