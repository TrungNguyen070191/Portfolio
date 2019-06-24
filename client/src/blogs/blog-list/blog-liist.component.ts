import { Component } from '@angular/core';
import { GetBlogDetailsService } from '@providers/services';

@Component({
  selector: 'tekbar-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss']
})
export class BlogListComponent {
  title = 'films-synopsys';
  filterCategory = 'hocNghe'
  blogs;
  keys;

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

      this.keys = Object.keys(this.blogs)

      console.log(this.keys);
      console.log(this.filterCategory);
    }

    }
  GetCategory(categoryId : string){
    const gayNghiep = this.filterCategory ==='gayNghiep' && categoryId ==='gayNghiep';
    const hocNghe = this.filterCategory ==='hocNghe'&& categoryId ==='hocNghe';
    return gayNghiep || hocNghe;
  }
  ShowCategoty(e : string){
    if (e === 'gayNghiep')
    {
      this.filterCategory = 'gayNghiep';
    }
    else
    {
      this.filterCategory = 'hocNghe';
    }
    }
  }

