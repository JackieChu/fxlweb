import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IndexRoutingModule } from './index-routing.module';
import { IndexComponent } from '../index/index.component';
import { HeaderComponent } from './header/header.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { SliderModule } from 'ngx-slider';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';


@NgModule({
  declarations: [IndexComponent, HeaderComponent, BannerComponent, ContentComponent, FooterComponent],
  imports: [
    CommonModule,
    IndexRoutingModule,
    SliderModule,
    AnimateOnScrollModule
  ]
})
export class IndexModule { }
