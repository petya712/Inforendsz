import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideoListComponent } from './video-list/video-list.component';
import { VideoComponent } from './video-list/video/video.component';
import { RentFormComponent } from './rent/rent-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { VideoFormComponent } from './video-form/video-form.component';
import { UserFormComponent } from './user-form/user-form.component';
import { CategoryFormComponent } from './category-form/category-form.component';
import { RentItemComponent } from './rent/cart-item/rent-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserItemComponent } from './user-list/user-item/user-item.component';

@NgModule({
  declarations: [
    AppComponent,
    VideoListComponent,
    VideoComponent,
    RentFormComponent,
    RentItemComponent,
    VideoFormComponent,
    UserFormComponent,
    CategoryFormComponent,
    UserListComponent,
    UserItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
