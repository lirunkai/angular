import {Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {CAlertComponent} from "../shared/c-alert/c-alert.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private renderer: Renderer2
  ) { }
  @ViewChild('home_renderer2') render: ElementRef;
  ngOnInit() {
    this.renderer.setAttribute(this.render.nativeElement, 'id', 'asd')
  }
  @ViewChild(CAlertComponent) myAlert: CAlertComponent;

  showAlert(){
    console.log(this.myAlert)
    this.myAlert.show();
  }
}
