import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { ApplicationService } from 'src/app/services/application.service';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent implements OnInit {
  standards:object[];
  exams:object[];
  selectedFile:File=null;
  selectedImage:File=null;
  form:FormGroup;
  imageUrl:string='./assets/Img/profile.png';
  constructor(private ser:ApplicationService,private toastr:ToastrService) { 
    this.form=new FormGroup({
      'fullName':new FormControl(null),
      'fatherName':new FormControl(null),
      'motherName':new FormControl(null),
      'birthDate':new FormControl(null),
      'birthRegistrationNo':new FormControl(null),
      'gender':new FormControl(null),
      'phone':new FormControl(null),
      'email':new FormControl(null),
      'previousSchool':new FormControl(null),
      'lastPublicExamGPA':new FormControl(null),
      'address':new FormControl(null),
      'standerdClassId':new FormControl(null),
      'examId':new FormControl(null)
    })
  }

  ngOnInit(): void {
    this.getObjects();

  }
  onFileSelected(event){
    this.selectedFile=<File>event.target.files[0];
  }

  onImageSelected(event){
    this.selectedImage=<File>event.target.files[0];
    var reader=new FileReader();
    reader.readAsDataURL(event.target.files[0]);
    reader.onload=(e:any)=>{
      this.imageUrl=e.target.result;
    }
  }

  onSubmited(){
    const fd=new FormData();
    fd.append('TC',this.selectedFile,this.selectedFile.name);
    fd.append('fullName',this.form.get('fullName').value);
    fd.append('fatherName',this.form.get('fatherName').value);
    fd.append('motherName',this.form.get('motherName').value);
    fd.append('birthDate',this.form.get('birthDate').value);
    fd.append('birthRegistrationNo',this.form.get('birthRegistrationNo').value);
    fd.append('gender',this.form.get('gender').value);
    fd.append('phone',this.form.get('phone').value);
    fd.append('email',this.form.get('email').value);
    fd.append('previousSchool',this.form.get('previousSchool').value);
    fd.append('lastPublicExamGPA',this.form.get('lastPublicExamGPA').value);
    fd.append('address',this.form.get('address').value);
    fd.append('standerdClassId',this.form.get('standerdClassId').value);
    fd.append('examId',this.form.get('examId').value);
    fd.append('Image',this.selectedImage,this.selectedImage.name);
    this.ser.postCandidate(fd).subscribe(res=>{
      this.toastr.success(res.candidateId, 'Your ID');
      console.log("under this")
      console.log(res);
    })
  }

  getObjects(){
    this.ser.getStandards().subscribe(res=>{
      this.standards=res;
      console.log(this.standards);
    })
    this.ser.getExams().subscribe(res=>{
      this.exams=res;
      console.log(this.exams);
    })
  }

}
