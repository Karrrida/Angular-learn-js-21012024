import { Component } from '@angular/core';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.less'],
})
export class AppComponent {
	title = 'Angular-learn-js-21012024';
	property = 'property';
	shopIcon = 'https://cdn3.iconfinder.com/data/icons/linecons-free-vector-icons-pack/32/shop-512.png';

	log(event: Event) {
		event.stopPropagation();
		console.log('click', event);
	}
}
