import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import 'hammerjs';
import { QuestionDetailComponent } from './question-detail/question-detail.component';
import { MomentModule } from 'angular2-moment';
import { AnswerFormComponent } from './answer-form/answer-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { QuestionListComponent } from './question-list/question-list.component';
import { QuestionFormComponent } from './question-form/question-form.component';
import { Routing } from './app.routing';
import { QuestionService } from './services/question.service';
import { HttpModule } from '@angular/http';
import { AuthService } from './services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { QuestionScreenComponent } from './question-screen/question-screen.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionDetailComponent,
    AnswerFormComponent,
    SigninScreenComponent,
    SignupFormComponent,
    QuestionListComponent,
    QuestionFormComponent,
    QuestionScreenComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    MomentModule,
    FormsModule,
    ReactiveFormsModule,
    Routing,
    HttpModule,
    HttpClientModule
  ],
  providers: [QuestionService,AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
