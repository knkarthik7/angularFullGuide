import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {

  // transform(value: any){  //given static vaule for length
  //   if(value.length > 3){
  //   return value.substr(0,3) + '...';
  // }
  // return value;
  // }
transform(value: any, limit:number) {
  if(value.length > limit) {
    return value.substr(0,limit) + '...'
  }
  return value;
}

}
