import { QuestionListComponent } from "../question-list/question-list.component";
import { QuestionDetailComponent } from "./question-detail.component";
import { QuestionFormComponent } from "../question-form/question-form.component";
import { QuestionScreenComponent } from "../question-screen/question-screen.component";



export const QUESTION_ROUTES = [
    {path: '', component: QuestionScreenComponent},
    {path:'new', component: QuestionFormComponent},
    {path: ':id', component: QuestionDetailComponent}
]