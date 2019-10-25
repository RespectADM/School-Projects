import { Component, OnInit } from '@angular/core';
import { Task } from '../../../../shared/models/task';

@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css']
})
export class CreateTaskComponent implements OnInit {
  model: Task = new Task();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Task Submitted', this.model);
  }

}
