import { Component, OnInit } from '@angular/core';
import { BlogService } from '@providers/services';
import { Post } from '@providers/models/post';
import { Router } from '@angular/router';

@Component({
  selector: 'tekbar-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  currentPost: Post;
  constructor(
    private blogService: BlogService,
    private router: Router
  ) { }

  ngOnInit() {
    this.currentPost = this.blogService.getCurrentPost();
  }

  backtoBlogList() {
    this.router.navigate(['/blogs-list']);
  }

}
