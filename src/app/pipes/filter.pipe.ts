import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(allcontacts:any[], searchkey:string,propName:string): any [] {
    const result:any=[]
    if(!allcontacts || searchkey=='' || propName==''){
      return allcontacts
    }
    allcontacts.forEach((contact:any)=>{
      if(contact[propName].trim().toLowerCase().includes(searchkey.toLowerCase())){
        result.push(contact)
      }
    })
    return result;
  }

}
