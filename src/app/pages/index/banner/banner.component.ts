import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit {
  slideItems = [
    {
      src: 'assets/images/banner2.jpg',
      title: 'FXL INTERNATIONAL CONSULTING',
      info: ['您可信賴', '的守護者'],
    },
    {
      src: 'assets/images/banner1.jpg',
      title: 'FXL INTERNATIONAL CONSULTING',
      info: ['整合專業', '創新服務'],
    },
    {
      src: 'assets/images/banner3.jpg',
      title: 'FXL INTERNATIONAL CONSULTING',
      info: ['多元化顧問團體'],
    }
  ];

  config = {
    wrapAround: true,
    prevNextButtons: false,
    lazyLoad: false,
    percentPosition: false,
    resize: false,
    autoPlay: 3000
  };

  infoClose = false;

  selectIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

  onSelect($event) {
    this.selectIndex = $event;
    this.infoClose = true;
    setTimeout(() => {
      this.infoClose = false;
    }, 500);
  }
}
