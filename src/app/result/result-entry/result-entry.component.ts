import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ResultEntry } from 'src/app/models/result-entry.model';
import { Subject } from 'src/app/models/session.model';
import { ResultService } from 'src/app/services/result.service';

@Component({
  selector: 'app-result-entry',
  templateUrl: './result-entry.component.html',
  styleUrls: ['./result-entry.component.css']
})
export class ResultEntryComponent implements OnInit {

  loadForm:FormGroup;
  mainForm:FormGroup;
  resultSub:ResultEntry;
  toggleForm:boolean=true;
  constructor(private fb:FormBuilder,private service:ResultService) { }

  ngOnInit(): void {
    this.loadForm=this.fb.group({
      examId:['',Validators.required],
      standardId:['',Validators.required]
    });

    this.mainForm=this.fb.group({
      examId:['',Validators.required],
      candidates:this.fb.array([

      ])
    })
  }


  onLoadSubmit(){
    this.mainForm=this.fb.group({
      examId:['',Validators.required],
      candidates:this.fb.array([

      ])
    });
    console.log(this.loadForm.value);
    this.service.postData(this.loadForm.value).subscribe(res=>{
      this.resultSub=res;
      console.log(this.mainForm.get('examId').value);
      this.mainForm.controls['examId'].setValue(res.examId);
      console.log(this.mainForm.get('examId').value);
      this.resultSub.candidates.forEach((value)=>this.addCandidate(value.candidateId,value.fullName,res.subjects))
      this.toggleForm=false;
    })
  }

  addCandidate(candidateId:number,fullName:string,subjects:Subject[]):void{
    (<FormArray>this.mainForm.get('candidates')).push(this.addCandidateForm(candidateId,fullName,subjects));
  }
  addCandidateForm(candidateId:number,fullName:string,subs:Subject[]):FormGroup{
    var fg= this.fb.group({
      candidateId:[candidateId,Validators.required],
      fullname:[fullName,Validators.required],
      subjects:this.fb.array([])
    });
    subs.forEach((val)=>(<FormArray>fg.get('subjects')).push(this.addSubjectForm(val.subjectId,val.subjectName)))
    return fg;
  }

  addSubjectForm(subjectId:number,subjectname:string):FormGroup{
    return this.fb.group({
      subjectId:[subjectId,Validators.required],
      subjectName:[subjectname,Validators.required],
      obtainMark:['']
    })
  }


  onMainSubmit(){
    console.log(this.mainForm.value);
    this.service.postMainData(this.mainForm.value).subscribe(res=>{
      console.log(res);
      this.toggleForm=true;
    })
  }

}
