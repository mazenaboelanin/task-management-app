import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: TasksListComponent
      },
      {
        path: 'add-task',
        component: AddTaskComponent
      },
      {
        path: 'task-details',
        component: TaskDetailsComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
