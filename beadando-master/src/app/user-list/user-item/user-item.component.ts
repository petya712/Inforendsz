import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { User } from 'src/app/models/user';

@Component({
  selector: 'app-user-item',
  templateUrl: './user-item.component.html',
  styleUrls: ['./user-item.component.css']
})
export class UserItemComponent implements OnInit {

  @Input()
  user!: User;

  constructor(private router: Router) { }

  users: User[] = [];

  searchQuery: string;

  ngOnInit(): void {
     
  }

  

  navigateToUserForm(id) {
    this.router.navigate([ '/user-form' ], {
      queryParams: {
        id: id
      }
    });
  }

}
