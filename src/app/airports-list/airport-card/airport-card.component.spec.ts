/* tslint:disable:no-unused-variable */
import {
  async,
  ComponentFixture,
  TestBed,
  waitForAsync,
} from "@angular/core/testing";

import { AirportCardComponent } from "./airport-card.component";
import { TranslateModule } from "@ngx-translate/core";
import { AirportsListService } from "src/app/services/airports-list/airports-list.service";
import airport from "../../../../stubbs/data/aiport-bcn.json";
import { DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
import { SharedModule } from "src/app/shared/shared.module";

describe("AirportCardComponent", () => {
  let component: AirportCardComponent;
  let fixture: ComponentFixture<AirportCardComponent>;
  let el: DebugElement;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [AirportCardComponent],
      imports: [TranslateModule.forRoot(), SharedModule],
      providers: [AirportsListService],
    })
      .compileComponents()
      .then(() => {
        fixture = TestBed.createComponent(AirportCardComponent);
        component = fixture.componentInstance;
        el = fixture.debugElement;
      });
  }));

  it("should create", () => {
    expect(component).toBeTruthy();
  });

  it("should display airport data", () => {
    component.airport = airport;
    fixture.detectChanges();

    const card = el.query(By.css(".card"));
    const title = card.query(By.css(".mat-card-title"));

    expect(card).toBeTruthy();
    expect(title.nativeElement.textContent).toBe("Josep Tarradellas");
  });
});
