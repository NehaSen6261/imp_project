import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListserviceService {
  
  list :number []=[100]
  constructor() { }

  add(value:number){
    this.list.push(value)
  }
}
