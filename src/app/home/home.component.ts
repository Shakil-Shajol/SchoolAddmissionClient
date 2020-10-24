import { Component, OnInit } from '@angular/core';
import { MatCarousel, MatCarouselComponent } from '@ngmodule/material-carousel';
import { Notice } from '../models/notice.model';
import { NoticeService } from '../services/notice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
 latestNotice:Notice;
  constructor(public serv:NoticeService) { }

  ngOnInit(): void {
    this.getLatestNotice();
  }

  getLatestNotice(){
    this.serv.GetLatestNotice().subscribe(res=>{
      this.latestNotice=res;
      console.log(this.latestNotice);
    })
  }
 // Slider Images
 slides = [
    {'image': '../assets/Img/1.jpg'},
    {'image': '../assets/Img/2.jpg'},
    {'image': '../assets/Img/3.jpg'}, 
    {'image': '../assets/Img/4.jpg'},
    {'image': '../assets/Img/5.jpg'}
];



}
