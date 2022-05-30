import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // title = 'calc'
  
  value:any=0;

number(num:any)
{
  if(this.value == '0')
  {
    this.value=''
  }
  this.value += num;
}

equal(){
    try{
      this.value = eval(this.value);
    }
    catch{
        alert("invalid");
    }
}
clear(){
    this.value="0";
}

}
