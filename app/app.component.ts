import {Component} from '@angular/core';

@Component({
    selector: 'pm-app',
    template: `
		<div class="container">
			<div class="row">
				<div class="col-xs-12">
					<h1 *ngIf='pageTitle'>{{pageTitle}}</h1>
					<div *ngIf='pageIngress'>{{pageIngress}}</div>
				</div>
			</div>

			<pm-products></pm-products>
		</div>
	`
})
export class AppComponent {
	pageTitle: string = '';
	pageIngress: string = '';
}