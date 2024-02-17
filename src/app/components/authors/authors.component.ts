import { Component, OnInit } from '@angular/core'
import {HttpService} from "../../services/http.service";
import {environment} from "../../../environments/environment.prod";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.scss']
})
export class AuthorsComponent implements OnInit {
  authors:any
  bool:boolean=false
  forDelete:boolean=false
  type:string="create"
  form = new FormGroup({
    name:new FormControl(""),
    genre:new FormControl("")
  })
  constructor(private http:HttpService) { }

  ngOnInit(): void {
  this.getAuthors()
  }
  getAuthors(){
    this.http.getData(`${environment.url}${environment.authors.get}`).subscribe(data=>{
      this.authors=data
    })
  }

  deleteAuthors(id:number) {
  this.http.deleteData(`${environment.url}${environment.authors.get}/${id}`).subscribe(()=>{
    this.getAuthors()
  })
  }
  openDeleteModal(){
    this.forDelete=true
  }
  closeDeleteModal(){
    this.forDelete=false
  }
  closeForm() {
    this.bool=false
  }
  openCreateForm() {
    this.bool = true
    this.form.reset()
    this.type = "create"
  }
  openEditForm(author: any) {
    this.bool = true
    this.form.patchValue({
      name: author['name'],
      genre: author['genre'],
    })
    this.type = author.id
  }

  editAuthor(value:any) {
    this.http.editData(`${environment.url}${environment.authors.get}/${this.type}`, value).subscribe(() => {
      this.getAuthors()
      this.bool = false
    })
  }
    createAuthor(value:any){
      this.http.createData(`${environment.url}${environment.authors.get}`, value).subscribe(()=>{
        this.getAuthors()
        this.bool = false
      })
    }
  saveChanges() {
    if (this.type==="create"){
      this.createAuthor(this.form.value)
    }else {
      this.editAuthor(this.form.value)
    }
    this.bool=false

  }


  reset() {
    this.form.reset()
  }
}
