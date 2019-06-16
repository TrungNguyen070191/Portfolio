import { Component } from '@angular/core';
import { GetBlogDetailsService } from '@providers/services';

@Component({
  selector: 'tekbar-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  title = 'films-synopsys';
  blogs;

  constructor(private getBlogDetailService: GetBlogDetailsService) { }

  ngOnInit() {
    this.getBlogDetailService.getJSON()
      .subscribe(res => {
        this.blogs = res;
        this.GetBlogList();
      });
  }

  GetBlogList() {
    if (this.blogs) {
      console.log(this.blogs);
    }
  }
}
