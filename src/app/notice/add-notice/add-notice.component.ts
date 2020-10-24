import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { NoticeService } from 'src/app/services/notice.service';

@Component({
  selector: 'app-add-notice',
  templateUrl: './add-notice.component.html',
  styleUrls: ['./add-notice.component.css']
})
export class AddNoticeComponent implements OnInit {

  constructor(public serv:NoticeService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  onSubmit(form: NgForm){
    this.serv.addNotice(form.value).subscribe(res=>{
      this.toastr.success('Published Successfully', 'Publish Notice');
      this.resetForm(form);
      console.log(res);
    })
  }

  resetForm(form?: NgForm){
    if (form!=null){
      form.reset();
    }
      this.serv.formData={
        noticeID:null,
        publishDate:null,
        noticeNo:'',
        headLine:'',
        noticeBody:''
      }
  }
}
