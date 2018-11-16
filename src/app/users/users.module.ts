import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './users/users.component';
import { UsersService } from './users/users.service';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ],
  declarations: [
    UsersComponent
  ],
  providers: [
    UsersService
  ]
})
export class UsersModule { }
