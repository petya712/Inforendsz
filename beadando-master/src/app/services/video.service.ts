import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Video } from '../models/video';

@Injectable({
  providedIn: 'root'
})
export class VideoService {

  constructor(private http: HttpClient) { }

  async loadVideos() {
    return this.http.get<Video[]>('/api/videos').toPromise();
  }

  async filterVideos(search: string) {
    return this.http.get<Video[]>('/api/videos', {
      params: { search }
    }).toPromise();
  }

  async addVideo(video: Video) {
    return this.http.post<Video>('/api/videos', video).toPromise();
  }

  async getVideoById(id: string) {
    return this.http.get<Video>('/api/videos/' + id).toPromise();
  }

  //async delVideo(video: Video) {
    //return this.http.delete<Video>('/api/videos', video).toPromise();
  //}
}
