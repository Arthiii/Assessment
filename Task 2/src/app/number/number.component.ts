import { Component, OnInit } from '@angular/core';
import { RestService } from '../rest.service';
import { products } from '../products';

@Component({
  selector: 'app-number',
  templateUrl: './number.component.html',
  styleUrls: ['./number.component.css']
})
export class NumberComponent implements OnInit {
  v:any;
  val:any;
  table:any=[];
  res:any;
 

 
 
 
 clickme()
  {
    this.table=[];
    for(let i=1; i<=this.v;i++)
    {
    this.res=this.val+"*"+i+"="+this.val*i;
    // console.log(this.res);
    this.table.push(this.res);
  }
}


cub:any=[];
tab:any=[];
num:any;
n:any;

square(){
  this.tab=[]
  this.cub=[]
  for(let i=1;i<=this.num;i++){
  this.n=Math.sqrt(i);
    this.tab.push(this.n);
  }
}
cube(){
  this.cub=[]
  this.tab=[]
  for(let i=1;i<=this.num;i++){
  this.n=Math.cbrt(i);
  this.cub.push(this.n);
  
  }
}

  odd1:any=[];
  o:any;
  even1: any=[];
  e:any;
  num1:any;

odd(){
  this.odd1=[]
  this.even1=[]
  for(let i=1;i<=this.num1;i++){
  if(i%2!=0){
   this.o=i;
   this.odd1.push(this.o);
  }
}
}
even(){
  this.odd1=[]
  this.even1=[]
  for(let i=1;i<=this.num1;i++){
     if(i%2==0){
     this.e=i;
     this.even1.push(this.e);
     }
  
   }
}

num2:number=0;
f=-1;
s=1;
sum=0;
fib:any=[]

fibo()
{
  this.fib=[];
  this.f=-1;
  this.s=1;
  for(let i=0;i<this.num2;i++)
  {
this.sum=this.f+this.s
this.fib.push(this.sum);
this.f=this.s;
this.s=this.sum;
  }

}
 title='JSONServerAPI';
 constructor(private rs: RestService) { }
 columns=["Product Id","Product","Category","Price","Action"];
 index=["id","title","category","price"];
 products:products[]|any=[];

 ngOnInit(): void {
     this.rs.getProducts().subscribe(
       (response)=>
       {
         this.products=response;
       },
       (error)=>
       {
         console.log("Error occured",error);
       }
     )
}
delete(id:any){
this.rs.deleteProduct(id).subscribe((r:any)=>{
  this.ngOnInit();
})
}
showedit: boolean=false;
showedit1:any;
prodtoadd:any = {id:"",title:"",category:"",price:""}


edit(e:any){
   this.showedit=true;
   this.prodtoadd=e;
   this.showedit1=false;
}
update(){
  this.rs.editProduct(this.prodtoadd).subscribe((r:any)=>{
    this.ngOnInit();
    alert("Update Successfully");
    this.showedit=false;
  });
}


addnew(){
  this.showedit1= true
  this.prodtoadd = {}
  this.showedit= false
}

add(){
  this.rs.addnewProd(this.prodtoadd).subscribe((r:any)=>{
     this.ngOnInit();
     this.showedit1= false
    alert("Added Successfully")
});
}

}