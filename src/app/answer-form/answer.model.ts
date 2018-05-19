import { Question } from "../question-detail/question.model";
import { User } from "../signin-screen/user.model";

export class Answer{
    constructor(public description: String, public question: Question, public createdAt?: Date, public user?: User){

    }
}

