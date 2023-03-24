import { Component, OnInit, Input } from '@angular/core';
import { Airport, AirportDetail } from 'src/app/airports-list/airport';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  @Input() data: Airport[] | AirportDetail | undefined = undefined;
  @Input() error: string | undefined = undefined;
}
