import { Answer } from "../answer-form/answer.model";

export class Question {
    title: String;
    description: String;
    createdAt?: Date;
    icon?: String;
    answers: Answer[];

    constructor(title:String,description:String,createdAt?: Date, icon?: string){
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.icon = icon;
        this.answers = [];

    }
}