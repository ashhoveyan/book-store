import { Component, OnInit } from '@angular/core';
import {HttpService} from "../../services/http.service";
import {environment} from "../../../environments/environment.prod";

@Component({
  selector: 'app-genres',
  templateUrl: './genres.component.html',
  styleUrls: ['./genres.component.css']
})
export class GenresComponent implements OnInit {
  genres:any

  constructor(private http:HttpService) { }


  ngOnInit(): void {
   this.getGenres()
  }
  getGenres(){
    this.http.getData(`${environment.url}${environment.genres.get}`).subscribe(data=>{
      this.genres=data
    })
  }

  deleteGenre(id:number) {
    this.http.deleteData(`${environment.url}${environment.genres.get}/${id}`).subscribe(()=>{
     this.getGenres()
    })
  }
}
