import { Component, Input, OnInit } from '@angular/core';
import { Video } from '../models/video';
import { VideoService } from '../services/video.service';

@Component({
  selector: 'app-video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css']
})
export class VideoListComponent implements OnInit {

  videos: Video[] = [];

  searchQuery: string;

  constructor(private videoService: VideoService) { }

  async ngOnInit() {
    this.videos = await this.videoService.loadVideos();
  }

  async search() {
    this.videos = await this.videoService.filterVideos(this.searchQuery);
  }

}
