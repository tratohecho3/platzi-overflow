import { Component, OnInit, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Answer } from './answer.model';
import { Question } from '../question-detail/question.model';
import { User } from '../signin-screen/user.model';
import { QuestionService } from '../services/question.service';
import  SweetScroll  from 'sweet-scroll'
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-answer-form',
  templateUrl: './answer-form.component.html',
  styleUrls: ['./answer-form.component.css']
})
export class AnswerFormComponent implements OnInit {
  @Input() question: Question;
  sweetScroll : SweetScroll;
  constructor(private questionService: QuestionService, private authService: AuthService, private router: Router) { 
    this.sweetScroll = new SweetScroll();
  }

  ngOnInit() {
  }


  onSubmit(form: NgForm){
    if(!this.authService.isLoggedIn()){
      this.router.navigateByUrl('/signin')
    }
    const answer = new Answer(
      form.value.description,
      this.question);
    this.questionService.addAnswer(answer)
      .subscribe( 
        a => {this.question.answers.unshift(a);this.sweetScroll.to('#title')},
        error => console.log(error)

    );
      
    form.reset();
  }

}
