import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatSharedModule } from './mat-shared/mat-shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NoticeComponent } from './notice/notice.component';
import { NoticeService } from "./services/notice.service";
import { HttpClientModule } from '@angular/common/http';
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FooterComponent } from './footer/footer.component';
import { AddNoticeComponent } from './notice/add-notice/add-notice.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AddmissionComponent } from './addmission/addmission.component';
import { ApplicationComponent } from './addmission/application/application.component';
import { ApplicationService } from "./services/application.service";
import { ExamService } from "./services/exam.service";
import { SessionService } from "./services/session.service";
import { ResultService } from "./services/result.service";
import { SessionComponent } from './session/session.component';
import { AddSessionComponent } from './session/add-session/add-session.component';
import { ExamComponent } from './exam/exam.component';
import { AddExamComponent } from './exam/add-exam/add-exam.component';
import { ResultComponent } from './result/result.component';
import { ResultEntryComponent } from './result/result-entry/result-entry.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavMenuComponent,
    NoticeComponent,
    FooterComponent,
    AddNoticeComponent,
    AddmissionComponent,
    ApplicationComponent,
    SessionComponent,
    AddSessionComponent,
    ExamComponent,
    AddExamComponent,
    ResultComponent,
    ResultEntryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSharedModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCarouselModule.forRoot(),
    FormsModule,
    ToastrModule.forRoot(),
    ReactiveFormsModule
  ],
  providers: [NoticeService,ApplicationService,ExamService,SessionService,ResultService],
  bootstrap: [AppComponent]
})
export class AppModule { }
