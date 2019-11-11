import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../modules/user/services/user.service';

@Component({
  selector: 'app-user-add',
  templateUrl: './user-add.component.html',
  styleUrls: ['./user-add.component.css']
})
export class UserAddComponent implements OnInit {

  constructor(private routing: Router, private userService: UserService, private location: Location) { }

  ngOnInit() {
  }

  onCreate(e) {
    this.userService.createUser(e.value).subscribe(response =>{
      this.routing.navigate(['/users']);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
