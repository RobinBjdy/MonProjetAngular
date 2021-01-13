import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-postlistcomponent',
  templateUrl: './postlistcomponent.component.html',
  styleUrls: ['./postlistcomponent.component.scss']
})
export class PostlistcomponentComponent implements OnInit {
  lastUpdate = new Promise((resolve, reject) => {
    const date = new Date();
    setTimeout(
      () => {
        resolve(date);
      }, 2000
    );
  });
  @Input() postTitre: string;
  @Input() postContent: string;

  constructor() {
    this.postTitre = "";
    this.postContent = "";
  }

  ngOnInit(): void {
  }

}
