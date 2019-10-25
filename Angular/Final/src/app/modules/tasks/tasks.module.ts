import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DisplayTasksComponent } from './display-tasks/display-tasks.component';
import { DisplayTaskComponent } from './display-tasks/display-task/display-task.component';
import { CreateTaskComponent } from './display-tasks/create-task/create-task.component';
import { UpdateTaskComponent } from './display-tasks/update-task/update-task.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule, HttpClientModule, FormsModule
  ],
  declarations: [DisplayTasksComponent, DisplayTaskComponent, CreateTaskComponent, UpdateTaskComponent],
  exports: [DisplayTasksComponent]
})
export class TasksModule { }
