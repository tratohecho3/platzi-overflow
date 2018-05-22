import { Component, OnInit } from '@angular/core';
import { Question } from '../question-detail/question.model';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {
  questions: Question[];
  loading = true;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions()
      .then((questions: Question[]) => {
        this.questions = questions;
      })
  }


}
