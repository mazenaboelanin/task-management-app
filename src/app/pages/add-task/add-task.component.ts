import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TaskService } from 'src/app/services/task/task.service';
import { v4 as uuidv4 } from 'uuid';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  isFormSubmitted: boolean;

  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit(): void {
    this.taskForm = new FormGroup({
      title: new FormControl(null, {
        validators: [Validators.required]
      }),
      description: new FormControl(null, {
        validators: [Validators.required]
      }),
      priority: new FormControl('1', {
        validators: [Validators.required]
      }),
      state: new FormControl('todo', {
        validators: [Validators.required]
      }),
      date: new FormControl(null, {
        validators: [Validators.required]
      })
    });
  }

  submitTask(){
    this.isFormSubmitted = true;

    if(!this.taskForm.valid){
      return;
    }

    let deliveryDate = this.taskForm?.value.date;
    deliveryDate = new Date(deliveryDate.year, deliveryDate.month, deliveryDate.day).toDateString();

    const task = {
      id: uuidv4(),
      title: this.taskForm?.value.title,
      description: this.taskForm?.value.description,
      priority: parseInt(this.taskForm?.value.priority),
      state: this.taskForm?.value.state,
      date: deliveryDate
    }
    console.log(task);

    this.taskService.createTask(task).subscribe(
      (response) => {
        console.log('Created Successfully:', response);
        this.isFormSubmitted = false;
        this.taskForm.controls['title'].reset();
        this.taskForm.controls['description'].reset();
        this.taskForm.controls['state'].setValue('todo')
        this.taskForm.controls['date'].reset();
      },
      (error) => {
        console.log('error:', error);
      }
    );
  }

  clearFormData(){
    console.log('form:', this.taskForm.value);
    this.taskForm.reset();
    console.log('form:', this.taskForm.value);
  }

}
