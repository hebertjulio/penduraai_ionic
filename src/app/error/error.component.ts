import { Component, Input } from '@angular/core';
import { ApiError } from '../api.error';


@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {

  @Input()
  field: string;

  @Input()
  error: ApiError;

  constructor() { }
}
