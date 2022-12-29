import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { Post } from 'src/model/post';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.scss']
})
export class CreatePostComponent {
  maxId: number = 0
  model = new Post(String(this.maxId))
  constructor(private postService: PostService){
  }

  ngOnInit(): void {
    this.maxId = 0;
    this.postService.posts.subscribe((posts: Array<Post>) =>  this.maxId = posts.length >= 0 ? Math.max(...posts.map(o => Number(o.id))) + 1 : 0)
    this.model = new Post(String(this.maxId));
  }

  onSubmit() {
    this.model.selected = true
    this.postService.onAdd(this.model)
    this.maxId++
    this.model = new Post(String(this.maxId),'','',false);
  }

  newPost() {
    this.model = new Post(String(this.maxId),'','',false);
  }
}
