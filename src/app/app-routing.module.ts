import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {DashboardComponent} from "./components/dashboard/dashboard.component";
import {BooksComponent} from "./components/books/books.component";
import {AuthorsModule} from "./components/authors/authors.module";
import {GenresModule} from "./components/genres/genres.module";

const routes :Routes=[

  { path: '', redirectTo:"dashboard", pathMatch:"full"},

  {path:'dashboard', component:DashboardComponent, children:[
      {path:'', redirectTo:"genres", pathMatch:"full"},
      {path:'books', component:BooksComponent},
      {path:"genres", loadChildren: () => import('./components/genres/genres.module').then(m => m.GenresModule) },
      {path:"authors",loadChildren: () => import('./components/authors/authors.module').then(m => m.AuthorsModule) },
    ]
  },
]

@NgModule({
  declarations: [DashboardComponent, BooksComponent],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    AuthorsModule,
    GenresModule
  ]
})
export class AppRoutingModule { }
