import { Question } from "../question-detail/question.model";

export class Answer{
    constructor(public description: String, public question: Question, public createdAt?: Date, public user?: User){

    }
}

export class User{
    constructor(public firstName: String, public lastName: String){}
}