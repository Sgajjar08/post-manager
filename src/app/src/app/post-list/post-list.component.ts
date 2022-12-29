import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/model/post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  data: Array<Post> = [];
  constructor(private postService: PostService){
  }

  ngOnInit(): void {
    this.postService.posts.subscribe((posts: Array<Post>) => this.data = posts)
  }

  onRemove(id: string){
      this.postService.onRemove(id)
      this.postService.posts.subscribe((posts: Array<Post>) => this.data = posts)
  }

  onSelect(id: string){
    this.postService.onSelect(id)
  }
}
