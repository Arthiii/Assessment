import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(value: any,filtervalue : any) {
    let results:any = []
    let temp
    if(!filtervalue)
        return value
    if(value && value.length){
        value.forEach((m:any)=>{
            temp = m['list'].toUpperCase();
            filtervalue = filtervalue.toUpperCase();
            if(temp.includes(filtervalue))
                results.push(m);
        })
        return results;
    }
}}