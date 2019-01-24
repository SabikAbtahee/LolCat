import { Time } from './../time.interface';
import { ClockService } from './../clock.service';
import { Component, OnInit } from '@angular/core';
// import { Observable } from 'rxjs/Observable';
import { interval } from 'rxjs';
import 'rxjs/add/observable/of';
import { startTimeRange } from '@angular/core/src/profile/wtf_impl';
@Component({
  selector   : 'app-main-cat',
  templateUrl: './main-cat.component.html',
  styleUrls  : ['./main-cat.component.scss']
})
export class MainCatComponent implements OnInit {

 
  time: Time;

  constructor(private clock:ClockService) { 
    
    this.startTime();
    

  }
  startTime(){
      interval(500)
      .subscribe(() => {
      this.clock.getTime();
      this.generateTime();  
      this.setTime(); 
  })
    

    
  }
  generateTime(){
    this.time={
        hour  : this.clock.getHour(),
        minute: this.clock.getMinute(),
        second: this.clock.getSecond()
    }
  }
  getTime(){
    return this.time;
  }
  setTime(){
    // document.getElementById('time').innerHTML = 
    // this.time.hour + ":" + this.time.minute + ":" + this.time.second;
  }

  ngOnInit() {
    
  }



}
