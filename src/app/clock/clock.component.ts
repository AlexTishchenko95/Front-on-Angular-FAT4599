import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-clock',
  templateUrl: './clock.component.html',
  styleUrls: ['./clock.component.scss']
})
export class ClockComponent implements OnInit {
  date: string = new Date().toDateString();
  time: string;

  constructor() {
    setInterval(() => {
      this.time = new Date().toLocaleTimeString();
    }, 1000);
  }

  ngOnInit() {
  }

}
