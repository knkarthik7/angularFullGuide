import { Component, OnInit } from '@angular/core';
import { deactivateGuard } from '../services/guards/deactivate-guard.service';
import { Observable } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit, deactivateGuard {
  user!: { id: number, name: string };
  editUserDetails!: { id: number, name: string };
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((data: Params) => {  //to get data from url
      this.user = {
        id: data['id'],
        name: data['name'],
      };
      console.log(this.user)
      this.editUserDetails = { ...this.user }
    })
  }

  canExit() {
    if (this.user.id !== this.editUserDetails.id || this.user.name !== this.editUserDetails.name) {
      if (confirm('Are you sure you want to exit')) {
        return true
      } else {
        return false
      }
    }
    return true
  }
}
