import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  taskForm: FormGroup;
  isFormSubmitted;

  constructor() { }

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
      })
    });
  }

  }

}
