import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { PostService } from 'src/app/service/post.service';

@Component({
  selector: 'app-new-post',
  templateUrl: './new-post.component.html',
  styleUrls: ['./new-post.component.scss']
})
export class NewPostComponent implements OnInit {

  constructor(private postService: PostService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    const name = form.value['name'];
    const texte = form.value['texte'];
    this.postService.addPost(name, texte);
    this.router.navigate(['/posts']);
  }

}
