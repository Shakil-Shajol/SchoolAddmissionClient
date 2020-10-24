import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-add-session',
  templateUrl: './add-session.component.html',
  styleUrls: ['./add-session.component.css']
})
export class AddSessionComponent implements OnInit {

  constructor(public serv:SessionService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.resetForm();
  }

  onSubmit(form: NgForm){
    this.serv.addSession(form.value).subscribe(res=>{
      this.toastr.success('New Session Created Successfully', 'New Session');
      this.resetForm(form);
      console.log(res);
    })
  }

  resetForm(form?: NgForm){
    if (form!=null){
      form.reset();
    }
      this.serv.formData={
        sessionId:null,
        sessionYear:''
      }
  }
}
