import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl } from '@angular/forms';
import * as moment from 'moment';
import { MqttService } from 'ngx-mqtt';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private _mqttService: MqttService,
  ) { }

  ngOnInit(): void {
    this.topic();
  }

  topic() {
    let topicName = `andy_test/tmp_t`;
    this._mqttService.observe(topicName).subscribe(res => {
      console.log(res);
    });
  }

}
