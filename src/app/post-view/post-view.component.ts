import { Component, OnInit } from '@angular/core';
import { PostService } from '../service/post.service'
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-post-view',
  templateUrl: './post-view.component.html',
  styleUrls: ['./post-view.component.scss']
})
export class PostViewComponent implements OnInit {

  postlistcomponent: any[];
  postSubscription: Subscription;

  constructor(private postService: PostService) {
    this.postlistcomponent = new Array();
    this.postSubscription = new Subscription;
  }

  ngOnInit() {
    this.postSubscription = this.postService.postSubject.subscribe(
      (appareils: any[]) => {
        this.postlistcomponent = appareils;
      }
    );
    this.postService.emitPostSubject();
  }

}
