import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogListComponent } from './blog-list/blog-liist.component';
import { GetBlogDetailsService } from '@providers/services';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
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