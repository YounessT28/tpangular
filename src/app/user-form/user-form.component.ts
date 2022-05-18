import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user/user.model';
import { UserService } from '../services/user.service';
import { Observable, Subject } from 'rxjs';


@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css'],
  providers: [UserService]
})

export class UserFormComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {}

  email = new FormControl('');
  name = new FormControl('');
  password = new FormControl('');
  role = new FormControl('');

  
  
  users: User[]= [];


  ngOnInit(): void {
    this.userService.getAll().subscribe({
      next: (users) => {
        this.users = users._embedded.users;
        //console.log(this.users);
      },
      error: (error) => {
        console.log(error);
      }
    });
    console.log(this.email.value);
  }

  getUsers(){
    this.userService.getAll().subscribe({
      next: (users) => {
        this.users = users._embedded.users;
        console.log(users);
      },
      error: (error) => {
        console.log(error);
      }
        
    });
  }

  onRegister(){
    let us = new User(this.name.value, this.email.value, this.password.value, this.role.value);
    console.log(us);
    this.userService.onRegister(us);
  }

}
