import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-pipes',
  templateUrl: './filter-pipes.component.html',
  styleUrls: ['./filter-pipes.component.css']
})
export class FilterPipesComponent implements OnInit {
users = [
  {name:'user1',joinedDate:new Date(2020,10-1,5)},
  {name:'user2',joinedDate:new Date(2021,3,30)},
  {name:'user3',joinedDate:new Date(2022,4,20)},
]
filteredString:string='';
appstatus = new Promise((resolve, reject) =>{
setTimeout(()=>{
resolve('User data received using async pipe') // async pipe is used in the http request
},3000);
})
  constructor() { }

  ngOnInit(): void {
  }
  onAddUser(){
    this.users.push({
      name:'karthik',
      joinedDate: new Date(2023,5,29)
    })
  }
}
