import { Component } from '@angular/core';
import { PostService } from 'src/app/services/post.service';
import { RemovedPost } from 'src/model/deletedPost';

@Component({
  selector: 'app-removed-post',
  templateUrl: './removed-post.component.html',
  styleUrls: ['./removed-post.component.scss']
})
export class RemovedPostComponent {
  data: Array<RemovedPost> = [];
  constructor(private postService: PostService){
  }

  ngOnInit(): void {
    this.postService.removedPosts.subscribe((posts: Array<RemovedPost>) => this.data = posts)
  }
}
