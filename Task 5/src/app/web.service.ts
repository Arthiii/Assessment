import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WebService {

  constructor(private http : HttpClient) { }
  url:string = "http://localhost:3000/client";
  url1:string = "http://localhost:3000/client/";

  getProducts(){
    return this.http.get(this.url);
}
addnewcust(e:any){
  return this.http.post(this.url,e);
}

editCust(e:any,id:any){
  return this.http.put(this.url1+id,e); 
}
getUser1(){
  return this.http.get("http://localhost:3000/comments/");
}
}
