import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    constructor(
    private userService: UserService,
    private router: Router,
  ) { }

  ngOnInit(): void { }

  //Initialize variables so that they may be used in homepage message
  userName = this.userService.getUserDetails()?.name;
  userID= this.userService.getUserDetails()?.userId;
  colour = this.userService.getUserDetails()?.colour;

}
