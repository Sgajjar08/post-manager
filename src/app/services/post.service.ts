// filter.pipe.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RemovedPost } from 'src/model/deletedPost';
import { Post } from 'src/model/post';

@Injectable({
    providedIn: 'root'
})
  
export class PostService {
    posts: BehaviorSubject<Array<Post>> = new BehaviorSubject<Array<Post>>([]);
    removedPosts: BehaviorSubject<Array<RemovedPost>> = new BehaviorSubject<Array<RemovedPost>>([]);
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param searchText search string
   */
  onSearch(searchText: string) {
    searchText = searchText.toLocaleLowerCase();
    if(this.posts.value && this.posts.value.length){
        this.posts.next(this.posts.value?.filter(post => {
            return post.name?.toLocaleLowerCase().includes(searchText);
        })) 
    }
  }

  onRemove(id: string){
    if(id && this.posts.value && this.posts.value.length){
      this.removedPosts.next(this.removedPosts.value.concat(this.posts.value?.filter(post => {
        return post.id === id;
      }).map(post => { return {...post, dateTime: new Date()}}))) 
      const post = this.posts.value.filter(post => post.id === id)[0]
      if(post.selected){
        this.posts.next(this.posts.value.filter(post => post.id !== id).map((post, index) => {
            if (index === 0){
              return{
                ...post,
                selected: true
              }
            } else {
              return post
            }
          }))
        } else {
          this.posts.next(this.posts.value.filter(post => post.id !== id))
        }
    }
  }

  onAdd(data: Post){
    if(data.id && data.name){
        this.posts.next(this.posts.value.map(post => {
          return {
            ...post,
            selected: false,
          }
        }))
        this.posts.next(this.posts.value.concat(data))
    }
  }

  onSelect(id: string){
    this.posts.next(this.posts.value.map(post => {
      return {
        ...post,
        selected: post.id === id
      }
    }))
  }
}