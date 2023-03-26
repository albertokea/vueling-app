import { Component, OnInit, Input } from '@angular/core';
import { Airport, AirportDetail } from 'src/app/airports-list/airport';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss']
})
export class SpinnerComponent {
  @Input() data: Airport[] | AirportDetail | undefined = undefined;
  @Input() error: string | undefined = undefined;
}
