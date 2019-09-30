import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menulist = [
    { name: '語系｜Languages'}
  ];

  // { name: '首頁',
  //     url: 'index'},
  //   { name: '關於我們',
  //     url: 'about' },
  //   { name: '最新消息',
  //     url: 'nes'},
  //   { name: '業務範圍',
  //     url: 'services' },
  //   { name: '顧問陣容',
  //     url: 'teams' },

  langList = [
    { title: '中文', value: 'zh' },
    { title: 'English', value: 'en' }
  ];

  constructor(private translate: TranslateService) { }

  ngOnInit() {
  }

  selected(lang) {
    this.translate.use(lang.value);
  }

}
