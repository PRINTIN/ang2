import {Component, EventEmitter} from 'angular2/core';
import {PostService} from './post.service';
import {HeartComponent} from './heart.component';



@Component({
	selector:'posts',
	template:`
	<h2>Twits</h2>
	{{ title}}
	<ul>
		<li *ngFor="#post of posts, #i = index">
			<div class="media">
			  <div class="media-left">
			    <a href="#">
			      <img class="media-object" src="http://lorempixel.com/100/100/people?"+str(i+1) alt="...">
			    </a>
			  </div>
			  <div class="media-body">
			    <h4 class="media-heading">{{post.text}}</h4>
			    ...
			    <heart 
					  	[isFavorite]="post.isFavorite" 
					  	[count]="post.count"
					  	>
			  	</heart>
			  </div>
			  
		</div>
		</li>
	</ul>
	`,
	providers : [PostService],
	directives : [HeartComponent]
})
export class PostsComponent{
	title = "This is the list of Twits";
	posts;
	constructor(postService: PostService){
		this.posts = postService.getPosts()
	}
}


