import { Component, OnInit } from '@angular/core';
import { BlogService } from '@providers/services';
import { Post } from '@providers/models/post';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'tekbar-blog-detail',
  templateUrl: './blog-detail.component.html',
  styleUrls: ['./blog-detail.component.scss']
})
export class BlogDetailComponent implements OnInit {
  currentPost: Post;
  constructor(
    private blogService: BlogService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    const postId = this.route.snapshot.params.param.split('_')[1];
    this.blogService.getPostById(postId).subscribe(post => {
      this.currentPost = post;
    });
  }

  backtoBlogList() {
    this.router.navigate(['/blogs-list']);
  }

}
