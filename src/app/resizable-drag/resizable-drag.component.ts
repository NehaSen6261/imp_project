import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

export class DynamicGrid{   
  title1:string;
  title2:string;
  title3:string;
}

@Component({
  selector: 'app-resizable-drag',
  templateUrl: './resizable-drag.component.html',
  styleUrls: ['./resizable-drag.component.css']
})
export class ResizableDragComponent implements OnInit {
  constructor(private toastr: ToastrService) { }

  dynamicArray: Array<DynamicGrid> = [];
  newDynamic: any = {};
  ngOnInit(): void {
      this.newDynamic = {title1: "", title2: "",title3:""};
      this.dynamicArray.push(this.newDynamic);
  }

  addRow(index) {  
      this.newDynamic = {title1: "", title2: "",title3:""};
      this.dynamicArray.push(this.newDynamic);
      this.toastr.success('New row added successfully', 'New Row');
      console.log(this.dynamicArray);
      return true;
  }
  
  deleteRow(index) {
      if(this.dynamicArray.length ==1) {
        this.toastr.error("Can't delete the row when there is only one row", 'Warning');
          return false;
      } else {
          this.dynamicArray.splice(index, 1);
          this.toastr.warning('Row deleted successfully', 'Delete row');
          return true;
      }
  }

}
