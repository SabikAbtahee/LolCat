import { Injectable } from '@angular/core';
import { Time } from './time.interface';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  
  makeTime ;
  constructor() {
    
  }
  getTime(){
    this.makeTime=new Date();
  }

  getHour(){
      return this.makeTime.getHours();
  }
  getMinute(){
      return this.makeTime.getMinutes();
  }
  getSecond(){
      return this.makeTime.getSeconds();
  }
}
