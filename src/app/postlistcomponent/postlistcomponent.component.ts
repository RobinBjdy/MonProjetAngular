import { Component, Input, OnInit } from '@angular/core';
import { PostService } from '../service/post.service'

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './postlistcomponent.component.html',
  styleUrls: ['./postlistcomponent.component.scss']
})
export class PostlistcomponentComponent implements OnInit {
  lastUpdate =  new Date();
    
  @Input() postTitre: string;
  @Input() postContent: string;
  @Input() postLove: number;

  constructor(private PostService: PostService) {
    this.postTitre = "";
    this.postContent = "";
    this.postLove = this.PostService.loveIt;
  }

  loveIt = this.PostService.loveIt;

  ngOnInit(): void {
  }

  onLove() {
    this.PostService.onLove();
    this.loveIt += 1;
  }

  onDontLove() {
    this.PostService.onDontLove();
    this.loveIt -= 1;
  }
}
