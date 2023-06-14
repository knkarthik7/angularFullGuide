import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Observable, Subscription, count, interval, map } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  intervalSubscription!: Subscription;
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
this.route.data.subscribe((data:Data)=>{  // this is angular observable, we no need to unsubscribe, angular itself will unsubscribe
  console.log(data)  //to find which is angular observable is e.g., this.route,this.params,this.fragments 
});
// this.intervalSubscription = interval(1000).subscribe(count=>{  //this is rxjs observable, for this we have to unsubscribe
//   console.log(count)
// })

let customObservables = Observable.create((observer: any) =>{
  let count = 0;
  setInterval(()=>{
    observer.next(count);
    if(count > 5){
      observer.error('Count is greater than 5')
    }
    if(count>3){
      observer.complete()
    }
    count++
  },1000)
});
this.intervalSubscription = customObservables.pipe(map((data:number) => { //rxjs map operators are used to maniplate the data
// data = data + 1
  return 'count is ' + (data + 1);
})).subscribe((data: any)=>{  //rxjs operator is placed between observable and subscribe
  console.log(data);
},(error: any) => {
  console.log(error);
},()=>{
  console.log('Complete')
})
  };
  ngOnDestroy(): void {
    this.intervalSubscription.unsubscribe()
  }

}
