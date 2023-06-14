import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  // userName:string=''
  @Output() userAdded = new EventEmitter<string>();
  @ViewChild('userName') userName:ElementRef | undefined //to get local reference value, we can use viewChild concept, here elementRef denotes that type of local reference
  // @contentChild is same as viewChild but it is getting local reference value from one component to other component, for eg.we are rendering <app-user> component in <app-users> component that time we are using local reference value in app-users component and get accesing in app-user.
  constructor() { }

  ngOnInit(): void {
  }
  onUserAdd(){
this.userAdded.emit(this.userName?.nativeElement.value) // we can't get value directly from html, so we have to use nativeElement
  }
}
