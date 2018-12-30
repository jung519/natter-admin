import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PostComponent } from './post/post.component';
import { PostService } from './post/post.service';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule
  ],
  declarations: [
    PostComponent
  ],
  providers: [
    PostService
  ]
})
export class PostModule { }
