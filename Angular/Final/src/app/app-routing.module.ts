import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DisplayTasksComponent } from './modules/tasks/display-tasks/display-tasks.component';
import { CreateTaskComponent } from './modules/tasks/display-tasks/create-task/create-task.component';
import { UpdateTaskComponent } from './modules/tasks/display-tasks/update-task/update-task.component';

const routes: Routes = [
  {
    path: 'tasks',
    component: DisplayTasksComponent
  },
  {
    path: 'newtask',
    component: CreateTaskComponent
  },
  {
    path: 'taskId',
    component: UpdateTaskComponent
  },
  {
    path: '',
    redirectTo: '/tasks',
    pathMatch: 'full'
    
  }



]

@NgModule({
  imports: [
    CommonModule, RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
