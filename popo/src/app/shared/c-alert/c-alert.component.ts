import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'c-alert',
  templateUrl: './c-alert.component.html',
  styleUrls: ['./c-alert.component.scss'],
  exportAs: 'ShareAlert'
})
export class CAlertComponent implements OnInit {
  // 控制是否显示弹框
  isShowAlert: boolean = false;
  @Input('title') title:string = '';
  @Input('confirm') confirm:string = "确认";
  @Input('cancel') cancel:string = "取消";
  @Input('oneConfirm') oneConfirm:string = "确认";
  @Input('one') one:string = '1';
  // 返回给host事件
  //确定
  @Output('onConfirm') onConfirm = new EventEmitter();
  // 取消
  @Output() onCancel = new EventEmitter();
  //关闭
  @Output() onClose = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  show() {
    this.isShowAlert = true;
  }

  hide() {
    this.isShowAlert = false;
  }

  confirmFn(){
    this.hide()
    this.onConfirm.emit();
  }

  cancelFn(){
    this.hide()
    this.onCancel.emit();
  }

  close(){
    this.hide()
    this.isShowAlert = false;

  }
}
