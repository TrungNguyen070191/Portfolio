import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BlogListComponent } from './blog-list/blog-liist.component';
import { BlogService } from '@providers/services';
import { FormsModule } from '@angular/forms';
import { BlogDetailComponent } from './blog-detail/blog-detail.component';
import { TimeAgoPipe } from 'time-ago-pipe';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    BlogListComponent,
    BlogDetailComponent,
    TimeAgoPipe
  ],
  entryComponents: [
    BlogListComponent
  ],
  providers: [
    BlogService
  ]
})
export class BlogsModule { }