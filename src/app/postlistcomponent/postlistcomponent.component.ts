import { Component, Input, OnInit } from '@angular/core';

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

  loveIt = 0;

  constructor() {
    this.postTitre = "";
    this.postContent = "";
    this.postLove = this.loveIt;
  }

  ngOnInit(): void {
  }

  onLove() {
    this.loveIt += 1;
  }

  onDontLove() {
    this.loveIt -=1;
  }
}
