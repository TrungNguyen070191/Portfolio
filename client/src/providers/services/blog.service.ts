import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '@providers/models/post';
import { map } from 'rxjs/operators';

@Injectable()
export class BlogService {

  currentPost: Post;

  constructor(private http: HttpClient) {
    this.getJSON().subscribe(data => {
      console.log(data);
    });
  }

  public getJSON(): Observable<any> {
    return this.http.get('../../assets/dummy/post.json');
  }

  getCurrentPost() {
    return this.currentPost;
  }

  setCurrentPost(currentPost: Post) {
    this.currentPost = currentPost;
  }

  getPostById(id): Observable<any> {
    return this.getJSON().pipe(map(posts => {
      if (posts) {
        return posts.find(post => post.id === id);
      }
    }));
  }

  public getUser(): Observable<any> {
    return this.http.get('../../assets/dummy/user.json');
  }

  getUserById(id) {
    return this.getUser().pipe(map(users => {
      if (users) {
        return users.find(user => user.id === id);
      }
    }));
  }
}

