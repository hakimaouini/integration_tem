import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsLayoutsComponent } from './forms-layouts.component';

describe('FormsLayoutsComponent', () => {
  let component: FormsLayoutsComponent;
  let fixture: ComponentFixture<FormsLayoutsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsLayoutsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsLayoutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
