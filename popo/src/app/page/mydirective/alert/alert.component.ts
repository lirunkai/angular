import {Component, OnInit, ViewChild} from '@angular/core';
import {CAlertComponent} from "../../../shared/c-alert/c-alert.component";

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {
  @ViewChild('shareAlert') sharedAlert: CAlertComponent;
  msg: string = 'warning msg';
  constructor(
  ) { }

  ngOnInit() {
    this.msg = `ssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssssss`;
  }
  showAlert(){
    this.sharedAlert.show();
  }
  confirm(){
    this.msg = "confirm clicked";
  }

  cancel(){
    this.msg = "cacel clicked";
  }
}
