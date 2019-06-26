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

  getPostById(id): Observable<Post> {
    return this.getJSON().pipe(map(posts => {
      if (posts) {
        return posts.find(post => post.postId === id);
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

  convertVietNamString(str) {
    str = str.toLowerCase();
    str = str.replace(/à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ/g, 'a');
    str = str.replace(/è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ/g, 'e');
    str = str.replace(/ì|í|ị|ỉ|ĩ/g, 'i');
    str = str.replace(/ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ/g, 'o');
    str = str.replace(/ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ/g, 'u');
    str = str.replace(/ỳ|ý|ỵ|ỷ|ỹ/g, 'y');
    str = str.replace(/đ/g, 'd');
    str = str.replace(/!|@|%|\^|\*|\(|\)|\+|\=|\<|\>|\?|\/|,|\.|\:|\;|\'| |\'|\&|\#|\[|\]|~|$|_/g, '-');
    str = str.replace(/-+-/g, '-');
    str = str.replace(/^\-+|\-+$/g, '');
    str = str.replace(/ /g, '-');
    return str;
  }
}

