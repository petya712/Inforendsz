import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Video } from 'src/app/models/video';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  @Input()
  video!: Video;
  late:boolean=false;

  constructor(private router: Router) { }

  ngOnInit(): void {
     
    let today=new Date();
    let newdate=new Date(this.video.date);
    if (newdate>today) {
      this.late=true;
    }
    console.log(this.late);

  }

  navigateToVideoForm(id) {
    this.router.navigate([ '/video-form' ], {
      queryParams: {
        id: id
      }
    });
  }

}
