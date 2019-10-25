import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { of } from 'rxjs';
import { Task } from '../../../shared/models/task';

@Component({
  selector: 'app-display-tasks',
  templateUrl: './display-tasks.component.html',
  styleUrls: ['./display-tasks.component.css']
})
export class DisplayTasksComponent implements OnInit {
  private tasksRoute = 'http://localhost:3000/tasks';
  public tasks: Task[];

  constructor(private http: HttpClient) {}

  getTasks() {
    this.http.get<Task[]>(this.tasksRoute).subscribe(tasks => {
      this.tasks = tasks;
      console.log('Tasks', this.tasks);
    });
  }

  ngOnInit() {
    this.getTasks();
  }

  onTaskDeleted(taskId) {
    let taskIndex = 0;
    for(let task of this.tasks) {
      if(task.id === taskId) {
        this.tasks.splice(taskIndex, 1);
        break;
      }
      taskIndex++;
    }
  }

  onTaskView(taskId) {
    let taskIndex = 0;
    for(let task of this.tasks) {
      if(task.id === taskId) {
       window.open(//localhost:4200/taskId);
      }
      taskIndex++;
    }
  }

}
