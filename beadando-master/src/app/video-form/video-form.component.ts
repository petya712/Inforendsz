import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../models/category';
import { User } from '../models/user';
import { CategoryService } from '../services/category.service';
import { VideoService } from '../services/video.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-video-form',
  templateUrl: './video-form.component.html',
  styleUrls: ['./video-form.component.css']
})
export class VideoFormComponent implements OnInit {

  videoForm: FormGroup = this.formBuilder.group({
    id: [],
    type: [''],
    author: [''],
    title: [''],
    date: [''],
    status: [''],
    renter: [],
    categories: [[]]
  });

  users: User[];

  categories: Category[];

  constructor(
    private videoService: VideoService,
    private userService: UserService,
    private categoryService: CategoryService,
    private formBuilder: FormBuilder,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  get id() {
    return this.videoForm.get('id');
  }

  async ngOnInit() {
    this.users = await this.userService.getUsers();
    this.categories = await this.categoryService.getAll();

    const id = this.activatedRoute.snapshot.queryParams.id;

    if (id) {
      const video = await this.videoService.getVideoById(id);
      this.videoForm.setValue(video);
    }
  }

  addVideo() {
    const video = this.videoForm.value;
    this.videoService.addVideo(video);
    this.router.navigateByUrl('/');
  }

  compareUsers(user1: User, user2: User): boolean {
    return user1 && user2 && user1.id === user2.id;
  }

  compareCategories(category1: Category, category2: Category): boolean {
    return category1 && category2 && category1.id === category2.id;
  }

}
