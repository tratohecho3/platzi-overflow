import { Component, OnInit } from '@angular/core';
import { Question } from '../question-detail/question.model';

const q = new Question('Como reutilizo un componente en Angular','esta es la descripcion', new Date(),'none');
@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})

export class QuestionListComponent implements OnInit {
  questions: Question[] = new Array(10).fill(q);
  constructor() { }

  ngOnInit() {
  }

}
