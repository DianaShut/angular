import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";
import {IUser} from "../../interfaces/user.interface";
import {NgFor, NgIf} from "@angular/common";
import {UserComponent} from "../user/user.component";
import {UserDetailsComponent} from "../user-details/user-details.component";

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [
    NgFor,
    NgIf,
    UserComponent,
    UserDetailsComponent
  ],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit{
  users: IUser[]
  userDetails: IUser
  constructor(private userService: UserService) {
  }
  ngOnInit() {
    this.userService.getAll().subscribe(value => this.users = value)
  }

  getUserEven(user: IUser) {
    this.userDetails = user
  }
}
