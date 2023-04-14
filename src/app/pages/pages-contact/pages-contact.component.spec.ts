import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesContactComponent } from './pages-contact.component';

describe('PagesContactComponent', () => {
  let component: PagesContactComponent;
  let fixture: ComponentFixture<PagesContactComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesContactComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
