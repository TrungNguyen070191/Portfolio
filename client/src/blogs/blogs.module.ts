import { NgModule } from '@angular/core';
import { BlogListComponent } from './blog-list/blog-liist.component';
import { GetBlogDetailsService } from '@providers/services';


@NgModule({
  imports: [
  ],
  declarations: [
    BlogListComponent
  ],
  entryComponents: [
    BlogListComponent
  ],
  providers: [
    GetBlogDetailsService
  ]
})
export class BlogsModule { }