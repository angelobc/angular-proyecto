import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../modules/user/services/user.service';
import User from '../modules/user/users/user.model';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css']
})
export class UserEditComponent implements OnInit {

  user: User;
  constructor(private router: ActivatedRoute, private routing: Router, private userService: UserService, private location: Location) { }

  ngOnInit() {
    const id = parseInt(this.router.snapshot.params.id, 10);
    this.userService.getUser(id).subscribe((user: User) =>{
      this.user = user;
    });
    console.log(this.user);
  }

  onUpdate(e){
    this.userService.updateUser(e.value).subscribe(response =>{
      this.routing.navigate(['/users']);
    });
  }

  goBack(): void {
    this.location.back();
  }

}
