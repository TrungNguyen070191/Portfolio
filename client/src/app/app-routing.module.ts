import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogListComponent } from '@blogs/blog-list/blog-liist.component';

const routes: Routes = [
  { path: '**', redirectTo: '/blogs-list', pathMatch: 'full' },
  { path: 'blogs-list', component: BlogListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
