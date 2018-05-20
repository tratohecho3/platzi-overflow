import { RouterModule, Routes } from '@angular/router';
import { QuestionListComponent } from './question-list/question-list.component';
import { SigninScreenComponent } from './signin-screen/signin-screen.component';
import { SignupFormComponent } from './signup-form/signup-form.component';
import { QUESTION_ROUTES } from './question-detail/question.routing';
const APP_ROUTES: Routes = [
    {path: '', component: QuestionListComponent, pathMatch:'full'},
    {path: 'signin', component: SigninScreenComponent},
    {path: 'signup',component: SignupFormComponent},
    {path: 'questions', children: QUESTION_ROUTES}

];

export const Routing = RouterModule.forRoot(APP_ROUTES);