import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent implements OnInit {
  @Input() taskForm: FormGroup;
  @Input() formField: string;
  @Input() isFormSubmitted: boolean;

  constructor() { }

  ngOnInit(): void {}

}
