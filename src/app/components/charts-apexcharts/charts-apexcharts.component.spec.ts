import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChartsApexchartsComponent } from './charts-apexcharts.component';

describe('ChartsApexchartsComponent', () => {
  let component: ChartsApexchartsComponent;
  let fixture: ComponentFixture<ChartsApexchartsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChartsApexchartsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChartsApexchartsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
