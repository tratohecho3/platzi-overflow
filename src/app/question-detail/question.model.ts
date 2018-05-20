import { Answer } from "../answer-form/answer.model";

export class Question {
    _id?: String;
    title: String;
    description: String;
    createdAt?: Date;
    icon?: any;
    answers: Answer[];

    constructor(title:String,description:String,createdAt?: Date, icon?: string){
        this._id = '1';
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.icon = icon;
        this.answers = [];

    }
}