import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  
  transform(value: any,filtervalue : any) {
    let results:any = []
    let temp
    if(!filtervalue)
        return value
    if(value && value.length){
        value.forEach((m:any)=>{
            temp = m['firstname'].toLowerCase();
            temp=temp + m['lastname'].toLowerCase();
            filtervalue = filtervalue.toLowerCase();
            if(temp.includes(filtervalue))
                results.push(m);
        })
        return results;
    }
}

}