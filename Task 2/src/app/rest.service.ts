import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from './products';

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http : HttpClient) { }
  url:string = "http://localhost:3000/posts";
  url1:string = "http://localhost:3000/posts/";

  getProducts(){
    return this.http.get<products[]>(this.url)
  }
  deleteProduct(id:any){
     return this.http.delete(this.url1+id); 
  }

  editProduct(e:any){
    return this.http.put(this.url1+e.id,e); 
 }

 addnewProd(e:any){
    return this.http.post(this.url,e);
  }
}
