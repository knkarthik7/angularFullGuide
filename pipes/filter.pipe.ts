import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false  //pure is used to getting filter data while adding itself,it will create performance issue & default is pure is true
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filteredString: string) {
    if (value.length === 0 || filteredString === '' ) {
      return value
    }
    const users = [];
    for (let user of value) {
      if(user['name'] === filteredString){
      users.push(user);
      }
    }
    return users;
  }
}
