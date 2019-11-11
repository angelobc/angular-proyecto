import { Component, OnInit } from '@angular/core';
import User from '../modules/user/users/user.model';
import { UserService } from '../modules/user/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe((users: User[]) =>{
      this.users = users;
    });
  }

  deleteUser(id: number){
    this.userService.deleteUser(id).subscribe(() =>{
      this.users = this.users.filter(u => u.id != id);
    });
  }

}
