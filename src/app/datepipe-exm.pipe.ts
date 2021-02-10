import { Pipe, PipeTransform } from '@angular/core';
import * as moment from "moment";
@Pipe({
  name: 'datepipeExm'
})
export class DatepipeExmPipe implements PipeTransform {


  transform(symbol: string): any {
    
    let date = moment.utc(symbol).toDate()
    console.log(date)
    return date
  }

}
