import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AnimateOnScrollModule } from 'ng2-animate-on-scroll';
import { IndexComponent } from '../index/index.component';
import { BannerComponent } from './banner/banner.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexRoutingModule } from './index-routing.module';
import { FlickityModule } from 'ngx-flickity';

@NgModule({
  declarations: [
    IndexComponent,
    HeaderComponent,
    BannerComponent,
    ContentComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    IndexRoutingModule,
    AnimateOnScrollModule,
    FlickityModule
  ],
})
export class IndexModule { }
