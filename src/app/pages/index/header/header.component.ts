import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

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

  langList = [
    { title: '中文', value: 'zh' },
    { title: '英文', value: 'en' }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  selected(lang) {
    this.translate.use(lang.value);
  }

}
