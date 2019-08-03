import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Slider } from 'ngx-slider';
import { fromEvent, interval, Subject } from 'rxjs';
import { mergeMap, startWith, takeUntil, tap } from 'rxjs/operators';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
})
export class BannerComponent implements OnInit, AfterViewInit, OnDestroy {
  private dots: any[];
  private destroy$ = new Subject();
  public slider = new Slider();

  slideItems = [
    {
      src: 'assets/images/banner2.jpg',
      title: 'FXL INTERNATIONAL CONSULTING',
      info: ['您可信賴的', '守護者'],
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
    },
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
    this.dots = [...(document.getElementsByClassName('dots') as any)];
    this.bindDotsEvent();
    this.autoPlay();
  }

  bindDotsEvent() {
    this.dots.forEach((dot, i) => {
      dot.addEventListener('click', () => {
        this.infoClose = true;
        setTimeout(() => {
          this.bannerIndex = i;
          this.infoClose = false;
        }, 30);
      });
    });
  }

  autoPlay() {
    const ngxSlider = document.getElementsByTagName('ngx-slider')[0];

    const enter$ = fromEvent(ngxSlider, 'mouseenter');
    const leave$ = fromEvent(ngxSlider, 'mouseleave');

    leave$
      .pipe(
        startWith(null),
        mergeMap(() =>
          interval(3000).pipe(
            tap(() => {
              if (++this.bannerIndex === this.slideItems.length) {
                this.bannerIndex = 0;
              }
              this.dots[this.bannerIndex].click();
            }),
            takeUntil(enter$),
          ),
        ),
        takeUntil(this.destroy$),
      )
      .subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.complete();
  }
}
