import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-user',
  templateUrl: './get-user.component.html',
  styleUrls: ['./get-user.component.css']
})
export class GetUserComponent implements OnInit {
  @Input() user:{ name: string; id: number; } ={
    name: '',
    id: 0
  }
  constructor() { }

  ngOnInit(): void {
  }

}
