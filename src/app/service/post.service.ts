import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postSubject = new Subject<any[]>();

  postlistcomponent = [
    {
      titre: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.'
    },
    {
      titre: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.'
    },
    {
      titre: 'Mon troisième post',
      content: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.'
    }
  ];
  
  constructor() { }

  emitPostSubject() {
    this.postSubject.next(this.postlistcomponent.slice());
  }

  addPost(titre: string, content: string) {
    const postObject = {
      titre: '',
      content: '',
    };
    postObject.titre = titre;
    postObject.content = content;
    this.postlistcomponent.push(postObject);
    this.emitPostSubject();
  }

}
