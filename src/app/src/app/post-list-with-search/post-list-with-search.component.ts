import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/model/post';

@Component({
  selector: 'app-post-list-with-search',
  templateUrl: './post-list-with-search.component.html',
  styleUrls: ['./post-list-with-search.component.scss']
})

export class PostListWithSearchComponent {
  searchText = "";
  data: Array<Post> = [];
  constructor(private postService: PostService){
  }

  ngOnInit(): void {
    this.postService.posts.next(require('../../../../assets/posts.json'))
    this.postService.posts.subscribe((posts: Array<Post>) => this.data = posts)
  }

  onSearchChange(){
    if(this.searchText && this.searchText.length){
      this.postService.onSearch(this.searchText)
      this.postService.posts.subscribe((posts: Array<Post>) => this.data = posts)
    } else{
      this.postService.posts.next(require('../../../../assets/posts.json'))
    }
  }

  onSelect(id: string){
    this.postService.onSelect(id)
  }
}
