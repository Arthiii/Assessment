import { Component, OnInit } from '@angular/core';
import {WebService} from '../web.service';
import { FormBuilder, FormGroup } from '@angular/forms';

declare const L:any;
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  filt:any;
  listview:boolean=false;
  cardview:boolean=true;
  custview:boolean=false;
  editview:boolean=false;
  orderview:boolean=false;
  navview:boolean=true;
  customorder:boolean=false;
  mapview:boolean=false;
  custdetailview:boolean=false;
  // lat:number=51.678418;
  // lng:number=7.809007;
  client:any
  

card(){
  this.cardview=true;
  this.listview=false;
  this.custview=false;
  this.editview=false;
  this.orderview=false;
  this.navview=true;
  this.customorder=false;
  this.mapview=false;
  this.custdetailview=false;
 

}
list(){
 this.cardview=false;
 this.listview=true;
 this.custview=false;
 this.editview=false;
 this.orderview=false;
 this.navview=true;
 this.customorder=false;
 this.mapview=false;
 this.custdetailview=false;
 
}
map(){
 this.mapview=true;
 this.cardview=false;
 this.listview=false;
 this.custview=false;
 this.editview=false;
 this.orderview=true;
 this.navview=false;
 this.customorder=false;
 this.custdetailview=false;
 

}
newcust(){
 this.cardview=false;
 this.listview=false;
 this.custview=true;
 this.editview=false;
 this.orderview=false;
 this.navview=true;
 this.customorder=false;
 this.mapview=false;
 this.custdetailview=false;
 
}

ordview(){
  this.cardview=false;
  this.listview=false;
  this.custview=false;
  this.editview=false;
  this.orderview=true;
  this.navview=false;
  this.customorder=false;
  this.mapview=true;
  this.custdetailview=false;
 
}
customdetails(){
 
  this.custdetailview=true;
  this.customorder=false;
  this.cardview=false;
  this.listview=false;
  this.custview=false;
  this.editview=false;
  this.orderview=false;
  this.navview=false;
  this.mapview=false;
 

}
custom(){
  this.customorder=true;
  this.cardview=false;
  this.listview=false;
  this.custview=false;
  this.editview=false;
  this.orderview=true;
  this.navview=false;
  this.mapview=false
  this. custdetailview=false;
 
}
editcust(){
  this.orderview=false;
  this.customorder=false;
  this.cardview=false;
  this.listview=false;
  this.custview=false;
  this.editview=true;
  this.navview=false;
  this.mapview=false
  this.custdetailview=false;
 }
location:any;
maps(){
var mymap = L.map('map').setView([51.505, -0.09], 5);
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
maxZoom: 19,
attribution: '© OpenStreetMap'
}).addTo(mymap);
this.rs.getUser1().subscribe((r:any)=>{
this.location = r
// console.log(this.location.lat)
// console.log(this.location.lon)
// console.log(this.location)
var size = Object.keys(this.location).length;
console.log(size)


for(let i=0;i<size;i++){
let marker = L.marker([this.location[i].lat, this.location[i].lon]).addTo(mymap);
marker.bindPopup(this.location[i].first+" "+this.location[i].last).openPopup();
}

});
}


// title='JSONServerAPI';
constructor(private rs:WebService, private formbuilder:FormBuilder) { }

toadd:any={firstname:"",lastname:"",address:"",city:"",state:""};
custtoadd:any={firstname:"",lastname:"",address:"",city:"",state:""};

formValue !:FormGroup;
ngOnInit(): void {
   this.getdata();
   this.formValue=this.formbuilder.group({
     firstname:[''],
     lastname:[''],
     address:[''],
     city:[''],
     state:['']
   })
 

}
getdata():void{
  this.rs.getProducts().subscribe((r:any)=>{
  this.client=r;
  })
} 


add(){
 this.toadd.firstname=this.formValue.value.firstname
 this.toadd.lastname=this.formValue.value.lastname
 this.toadd.address=this.formValue.value.address
 this.toadd.city=this.formValue.value.city
 this.toadd.state=this.formValue.value.state
 
 this.rs.addnewcust(this.toadd).subscribe((r:any)=>{
      console.log(r);
      alert("Added Successfully");
      this.formValue.reset();
      this.getdata();
})
}
id:any;
edit(e:any){
  // this.custtoadd=e;
  this.cardview=false;
  this.listview=false;
  this.custview=false;
  this.editview=true;
  this.orderview=false;
  this.navview=true;
  this.customorder=false;
  this.id=e.id;
  this.formValue.controls['firstname'].setValue(e.firstname)
  this.formValue.controls['lastname'].setValue(e.lastname)
  this.formValue.controls['address'].setValue(e.address)
  this.formValue.controls['city'].setValue(e.city)
  this.formValue.controls['state'].setValue(e.state)
}

_update(){
  this.toadd.firstname=this.formValue.value.firstname
 this.toadd.lastname=this.formValue.value.lastname
 this.toadd.address=this.formValue.value.address
 this.toadd.city=this.formValue.value.city
 this.toadd.state=this.formValue.value.state

  this.rs.editCust(this.toadd,this.id).subscribe((r:any)=>{
    this.getdata();
    alert("Update Successfully...");
    
  });
}

page:number=1;
count:number=0;
tablesize:number=10;

onTableDataChange(event:any){
  this.page=event;
  this.getdata();
}

page1:number=1;
count1:number=0;
tablesize1:number=10;

onTableDataChange1(event:any){
  this.page=event;
  this.getdata();
}

page2:number=1;
count2:number=0;
tablesize2:number=1;

onTableDataChange2(event:any){
  this.page=event;
  this.getdata();
}

   
}