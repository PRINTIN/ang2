import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'heart',
    template: `
		    <i 
		    	class="glyphicon"
		    	[class.glyphicon-heart-empty]="!isFavorite"
		    	[class.glyphicon-heart]="isFavorite"
		    	(click)="onClick()"
		    >
		    {{count}}
		</i>
    `,
    inputs: ['isFavorite','count'],
    outputs: ['change'],
    styles:[`
        .glyphicon-heart {
            color :deeppink;
            cursor:pointer;
        }
        .glyphicon-heart-empty {
        	color : #CCC;
        	cursor:pointer;
        }
    `],
})
export class HeartComponent { 
	isFavorite=false;
	count=0;
    change = new EventEmitter();
	onClick(){
		this.isFavorite = !this.isFavorite;
		this.count += this.isFavorite ?1:-1;
        this.change.emit({newValue: this.isFavorite,count:this.count});
	}
}


