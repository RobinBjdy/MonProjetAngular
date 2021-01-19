import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  post: Post[] = [];
  postSubject = new Subject<Post[]>();


  loveIt = 0;

  constructor() { }

  emitPosts() {
    this.postSubject.next(this.post);
  }

  // Création d'un nouveau post
  createNewPost(newPost: Post) {
    this.post.push(newPost);
    this.emitPosts();
  }

  // Suppression d'un post
  removePost(post: Post) {
    const postIndexToRemove = this.post.findIndex(
      (postEl) => {
        if (postEl === post) {
          return true;
        }else{ return false}
      }
    );
    this.post.splice(postIndexToRemove, 1);
    this.emitPosts();
  }

  removeAllPost(posts: number) {
    this.post.splice(posts);
  }

}
