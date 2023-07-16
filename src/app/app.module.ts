import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TasksListComponent } from './pages/tasks-list/tasks-list.component';
import { TaskDetailsComponent } from './pages/task-details/task-details.component';
import { AddTaskComponent } from './pages/add-task/add-task.component';
import { TaskCardComponent } from './components/task-card/task-card.component';

@NgModule({
  declarations: [
    AppComponent,
    TasksListComponent,
    TaskDetailsComponent,
    AddTaskComponent,
    TaskCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
