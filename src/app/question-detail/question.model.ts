export class Question {
    title: String;
    description: String;
    createdAt?: Date;
    icon?: String;

    constructor(title:String,description:String,createdAt?: Date, icon?: string){
        this.title = title;
        this.description = description;
        this.createdAt = createdAt;
        this.icon = icon;

    }
}