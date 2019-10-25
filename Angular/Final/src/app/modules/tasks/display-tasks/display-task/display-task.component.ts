import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../../../../shared/models/task';
@Component({
  selector: 'app-display-task',
  templateUrl: './display-task.component.html',
  styleUrls: ['./display-task.component.css']
})
export class DisplayTaskComponent implements OnInit {
  @Input() task: Task;

  @Output() taskDeleted: EventEmitter<number> = new EventEmitter();
  @Output() taskView: EventEmitter<number> = new EventEmitter();
  
  constructor() { }

  ngOnInit() {
  }

  onClickDelete() {
    this.taskDeleted.emit(this.task.id);
    alert("DELETE!");
  }

  onClickView() {
    this.taskView.emit(this.task.id);
  }

}
