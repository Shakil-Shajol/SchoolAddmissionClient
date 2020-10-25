import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Session, Subject } from 'src/app/models/session.model';
import { ExamService } from 'src/app/services/exam.service';

@Component({
  selector: 'app-add-exam',
  templateUrl: './add-exam.component.html',
  styleUrls: ['./add-exam.component.css']
})
export class AddExamComponent implements OnInit {
  webForm:FormGroup;
  sessions:Session[];
  subjects:Subject[];
  validationMessages={
    'examCode':{
      'required':'Exam Code is required field.'
    },
    'examDate':{
      'required':'Exam Date is required field.'
    }
  };
  formErrors={
    'examCode':'',
    'examDate':''
  };
  constructor(private fb:FormBuilder,private service:ExamService,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.webForm=this.fb.group({
      sessionId:['',Validators.required],
      examCode:['',Validators.required],
      examDate:[null,Validators.required],
      subjects: this.fb.array([
        this.addSubjectForm()
      ])
    });
    this.webForm.valueChanges.subscribe((data)=>{
      this.logValidationErrors(this.webForm);
    });
    this.loadExamRelatedData();
  }
  loadExamRelatedData():void{
    this.service.getSession().subscribe(res=>{
      this.sessions=res;
      console.log(this.sessions);
    });
    this.service.getSubjects().subscribe(res=>{
      this.subjects=res;
      console.log(this.subjects);
    });
  }

  addSubjectForm():FormGroup{
    return this.fb.group({
      subjectId:['',Validators.required],
      mark:['',Validators.required],
      passMark:['',Validators.required]
    })
  }
  addSubjectClick():void{
    (<FormArray>this.webForm.get('subjects')).push(this.addSubjectForm());
  }
  removeSubject(i):void{
    (<FormArray>this.webForm.get('subjects')).removeAt(i);
  }

  logValidationErrors(group:FormGroup=this.webForm):void{
    Object.keys(group.controls).forEach((key: string)=>{
      const abstractControl =group.get(key);

        this.formErrors[key]='';
        if (abstractControl && !abstractControl.valid && (abstractControl.touched||abstractControl.dirty)) {
          const messages=this.validationMessages[key];
          for (const errorKey in abstractControl.errors) {
            if (errorKey) {
              this.formErrors[key] += messages[errorKey] + ' ';
            }
            
          }
        }
        if (abstractControl instanceof FormGroup) {
          this.logValidationErrors(abstractControl);
        }

    })
  }

  onSubmited(){
    this.service.postExam(this.webForm.value).subscribe(res=>{
      this.toastr.success('Scheduled Added Succesfully', 'Schedule Added');
      console.log(res);
    })
  }
}
