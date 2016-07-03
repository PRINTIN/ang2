export class PostService{
	getPosts():Object[]{
		return [
		{"isFavorite":1,"count":4,"text":"Text 1","number":2},
		{"isFavorite":0,"count":6,"text":"text2 fsdfsdf","number":4},
		{"isFavorite":1,"count":90,"text":"Random text","number":7}
		];
	}
}