import { Component, OnInit } from '@angular/core';
import $ from 'jquery';


@Component({
  selector: 'srf-time-clock',
  templateUrl: './time-clock.component.html',
  styleUrls: ['./time-clock.component.sass']
})
export class TimeClockComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log($, 'jq');
  }

}
