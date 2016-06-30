import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'favorite',
    template:`
        <i 
            class="glyphicon"
            [ngClass]="{
                'glyphicon-star-empty':!isFavorite,
                'glyphicon-star':isFavorite
            }"
            (click)="onClick()"
        >
        </i>
`,
    inputs: ['isFavorite'],
    outputs: ['change'],
    styles:[`
        .glyphicon-star {
            color :orange;
        }
    `]
})
export class FavoriteComponent { 
	isFavorite = false;

    change = new EventEmitter();

	onClick(){
		this.isFavorite = !this.isFavorite;
        this.change.emit({newValue: this.isFavorite});
	}
}
