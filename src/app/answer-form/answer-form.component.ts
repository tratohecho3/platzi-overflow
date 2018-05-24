import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Question } from '../question-detail/question.model';
import { User } from '../signin-screen/user.model';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {
  @Input() question: Question;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
  }


  onSubmit(form: NgForm){
    const answer = new Answer(
      form.value.description,
      this.question);
    this.questionService.addAnswer(answer)
      .subscribe( 
        a => this.question.answers.unshift(a),
        error => console.log(error)

    );
      
    form.reset();
  }

}
