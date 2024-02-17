import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import {AuthorsComponent} from "./authors.component";
import { RouterModule, Routes} from "@angular/router";
import {ReactiveFormsModule} from "@angular/forms";
import{ModalComponent} from "../modal/modal.component";

const routes:Routes=[
  {
    path:"", component:AuthorsComponent
  }

]
@NgModule({
  declarations: [AuthorsComponent, ModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,

  ]
})
export class AuthorsModule { }
