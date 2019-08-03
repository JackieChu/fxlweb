import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menu = [
    { name: '首頁' },
    { name: '關於我們' },
    { name: '最新消息' },
    { name: '獲獎紀錄' },
    { name: '專業領域' },
    { name: '專業律師群' },
    { name: '人事募集' },
    { name: '理慈據點' },
    { name: '社群' },
    { name: '繁體中文' }
  ];

  constructor() { }

  ngOnInit() {
  }

}
