import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { merge } from 'rxjs';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  user!: { id: number; name: string; };
  constructor(private router:Router, private route:ActivatedRoute) { } //activatedRoute is used for params in the route and it is defined as the current route

  ngOnInit(): void {
    this.user = {
      id:this.route.snapshot.params['id'],
      name:this.route.snapshot.params['name']
    };
    this.route.params.subscribe((data:Params) => {  //here subscribe means always listen to the params to get queryparams value
      this.user = {
        id:data['id'], //used to get data from url to html
        name:data['name']
      }
    })
  }
// onCategory(){
//   this.router.navigate(['/category']) // by click it should navigate to another page
// }
getDetails(){
  this.router.navigate(['/about',5,'user1'],{
    queryParams:{page:9,search:'user'},
    fragment:'loading'
  })
}
onEdit(){
  this.router.navigate(['/contact',this.user.id,this.user.name,'edit'],{ //queryParamsHandling is used to queryParams from the routing without queryParams property 
    queryParamsHandling:'preserve' //queryParamsHandling:merge means it merge queryParams is passing and also coming from the url & queryParamsHandling:preserve means it just forward the new one
  })
}
}
