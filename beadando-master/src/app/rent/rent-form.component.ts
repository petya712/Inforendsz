import { Component, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';
import {formatDate} from '@angular/common';


@Component({
  selector: 'app-rent',
  templateUrl: './rent-form.component.html',
  styleUrls: ['./rent-form.component.css']
})
export class RentFormComponent implements OnInit {

  videos: Video[] = [];


  constructor(private videoService: VideoService) { }

  async ngOnInit() {
    this.videos = await this.videoService.loadVideos();
  }

  todate=formatDate(new Date(), 'yyyy.MM.dd', 'en');


}
