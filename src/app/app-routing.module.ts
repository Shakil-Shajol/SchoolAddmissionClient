import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddmissionComponent } from './addmission/addmission.component';
import { ApplicationComponent } from './addmission/application/application.component';
import { AddExamComponent } from './exam/add-exam/add-exam.component';
import { HomeComponent } from './home/home.component';
import { AddNoticeComponent } from './notice/add-notice/add-notice.component';
import { NoticeComponent } from './notice/notice.component';
import { AddSessionComponent } from './session/add-session/add-session.component';


const routes: Routes = [
  {path:'',component:HomeComponent,pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'notice',component:NoticeComponent},
  {path:'addmission',component:AddmissionComponent},
  {path:'apply',component:ApplicationComponent},
  {path:'notice/add',component:AddNoticeComponent},
  {path:'session/add',component:AddSessionComponent},
  {path:'exam/add',component:AddExamComponent},
  {path:'notice/:id',component:NoticeComponent},
  {path:'**',component:HomeComponent,pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
