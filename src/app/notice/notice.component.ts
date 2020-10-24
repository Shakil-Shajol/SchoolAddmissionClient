import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Notice } from '../models/notice.model';
import { NoticeService } from '../services/notice.service';

@Component({
  selector: 'app-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.css']
})
export class NoticeComponent implements OnInit {
  notices:Notice[];
  notice:Notice;
  noticeId:Number;
  singleNotice:boolean=false;
  constructor(private serv:NoticeService,private acvRoute:ActivatedRoute) {
    const idParam = 'id';
    if (this.acvRoute.snapshot.params[idParam]) {
      this.noticeId = this.acvRoute.snapshot.params[idParam];
      this.singleNotice=true;
      console.log(this.noticeId);
  }
   }

  ngOnInit(): void {
    console.log(this.singleNotice);
    if (this.singleNotice) {
      this.getNotice(this.noticeId);
    } else {
      this.getAllNotice();
    }
    
  }

  getAllNotice(){
    this.serv.getAllNotice().subscribe(data=>{
      this.notices=data;
      console.log(this.notices);
    })
  }

  getNotice(id:Number){
    this.serv.getNotice(id).subscribe(data=>{
      this.notice=data;
      console.log(this.notice);
    })
  }

}
