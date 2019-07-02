import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from '@blogs/blog-list/blog-liist.component';
import { BlogDetailComponent } from '@blogs/blog-detail/blog-detail.component';

const routes: Routes = [
  { path: './', redirectTo: '/blogs-list' },
  { path: 'blogs-list', component: BlogListComponent },
  { path: 'blog-detail/:param', component: BlogDetailComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
