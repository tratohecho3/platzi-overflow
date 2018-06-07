import { Component, OnInit, Input } from '@angular/core';
import { Question } from '../question-detail/question.model';
import { QuestionService } from '../services/question.service';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {
  
  @Input() sort = '-createdAt';
  questions: Question[];
  loading = true;
  constructor(private questionService: QuestionService) { }

  ngOnInit() {
    this.questionService.getQuestions(this.sort)
      .then((questions: Question[]) => {
        this.questions = questions;
        this.loading = false;
      })
  }


}
