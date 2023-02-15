import { Component } from '@angular/core';
import { NgbCarouselConfig, NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf, NgFor} from '@angular/common';


@Component({
	standalone: true,
	imports: [NgbCarouselModule, NgIf, NgFor],
	selector: 'app-carousel-navigation',
	templateUrl: './carousel-navigation.component.html',
	styleUrls: ['./carousel-navigation.component.css'],
	providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class CarouselNavigationComponent {
	showNavigationArrows = true;
	showNavigationIndicators = true;
	images = [0, 2, 3, 4, 5].map((n) => `./assets/images/travaux_0${n}.jpg`);

	constructor(config: NgbCarouselConfig) {
		// customize default values of carousels used by this component tree
		config.showNavigationArrows = true;
		config.showNavigationIndicators = true;
	}
}