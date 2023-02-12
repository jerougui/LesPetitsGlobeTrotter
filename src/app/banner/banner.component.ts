import { Component } from '@angular/core';
import { BannerService } from '../banner.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent {
  constructor(public bannerService : BannerService) {
 }
 
  getBannerTitle() {
    return this.bannerService.getTitle();
  }

  getBannerDescription() {
    return this.bannerService.getDescription();
  }

  getUri() {
    return this.bannerService.getUri();
  }

  getUriDesc() {
    return this.bannerService.getUriDesc();
  }
}
