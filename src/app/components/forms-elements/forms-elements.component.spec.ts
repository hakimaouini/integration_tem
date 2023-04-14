import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsElementsComponent } from './forms-elements.component';

describe('FormsElementsComponent', () => {
  let component: FormsElementsComponent;
  let fixture: ComponentFixture<FormsElementsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormsElementsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
