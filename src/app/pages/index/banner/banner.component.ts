import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Slider } from 'ngx-slider';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent implements OnInit, AfterViewInit {
  public slider = new Slider();

  slideItems = [
    {
      src: 'assets/images/banner2.jpg',
      title: 'FXL INTERNATIONAL CONSULTING',
      info: ['您可信賴的', '守護者']
    },
    {
      src: 'assets/images/banner1.jpg',
      title: 'FXL INTERNATIONAL CONSULTING',
      info: ['整合專業', '創新服務']
    },
    {
      src: 'assets/images/banner3.jpg',
      title: 'FXL INTERNATIONAL CONSULTING',
      info: ['多元化顧問團體']
    }
  ];
  bannerIndex = 0;
  infoClose = false;

  constructor() {
    this.slider.config.loop = true;
    this.slider.config.showPreview = false;
    this.slider.config.showTitle = false;
    this.slider.config.showNavigator = false;
  }

  ngOnInit() {
    this.slider.items = this.slideItems;
  }

  ngAfterViewInit() {
    const dots = document.getElementsByClassName('dots');
    for (let i = 0; i < dots.length; i++) {
      document.getElementsByClassName('dots')[i].addEventListener('click', () => {
        this.infoClose = true;
        setTimeout(() => {
          this.bannerIndex = i;
          this.infoClose = false;
        }, 30);
      });
    }
  }

}
