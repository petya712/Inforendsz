import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {

  userForm: FormGroup = this.formBuilder.group({
    id: [],
    firstName: [''],
    lastName: [''],
    personal_id: [''],
    phone: [''],
    address: [''],
    status: [''],
    counter: [0],
    allow: [true]
    
  });

  successMessage: string;
  errorMessage: string;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private activatedRoute: ActivatedRoute,
    private router: Router,) { }

  async ngOnInit(): Promise<void> {
    const id = this.activatedRoute.snapshot.queryParams.id;

    if (id) {
      const video = await this.userService.getUserById(id);
      this.userForm.setValue(video);
    }
  }

  async createUser() {
    const user = this.userForm.value;
    this.successMessage = '';
    this.errorMessage = '';
    this.router.navigateByUrl('/user-list');

    try {
      const userAdded = await this.userService.createUser(user);
      this.successMessage = 'User added with id ' + userAdded.id;
    } catch (err) {
      this.errorMessage = err.error.message;
    }
  }

}
