import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ssss-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // 初始化值
  public editorContent = "";
  // 配置编辑器提醒文字
  public editorConfig = {
    placeholder: "输入公告内容，支持html"
  };
  // 触发事件 html标记语言， text文本
  onContentChanged({ html, text }) {
    console.log(html, text);
  }

}
