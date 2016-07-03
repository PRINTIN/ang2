import {Component, EventEmitter} from 'angular2/core';

@Component({
    selector: 'voter ',
    template: `
    <div class='vote-class'>
		    <i 
		    	class="glyphicon glyphicon-menu-up vote-button"
		    	(click)="onClickUp()"
                [class.active] = "myVote==1"
		    >
            </i>
            <span>
    		    {{voteCount + myVote}}
            </span>
            <i 
                class="glyphicon glyphicon-menu-down vote-button"
                (click)="onClickDown()"
                [class.active] = "myVote==-1"
            >
    		</i>
    </div>
    `,
    inputs: ['voteCount','myVote'],
    outputs : ['vote'],
    styles:[`
            .vote-class{
                width:20px;
                text-align: center;
                color: #999;
            }
            .active{
                color:orange;
            }
            .vote-button{
                cursor: pointer;
            }
    `]
})
export class VoteComponent { 
	
    voteCount=10;
    myVote=0;
    vote = new EventEmitter();
	
    onClickUp(){
        if( this.myVote==1){
            return
        }
        this.myVote = this.myVote + 1;
        this.vote.emit({myVote:this.myVote});	
    }

    onClickDown(){
        if( this.myVote==-1){
            return
        }
        this.myVote = this.myVote - 1;
        this.vote.emit({myVote:this.myVote});
        
    }
}


