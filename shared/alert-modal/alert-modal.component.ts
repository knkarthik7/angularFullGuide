import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() error: any;
  @Output() close = new EventEmitter<void>();
  constructor() { }

  ngOnInit(): void {
  }
onClseClick(){
  this.close.emit(); 
}
}
