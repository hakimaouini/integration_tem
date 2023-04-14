import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsBootstrapComponent } from './icons-bootstrap.component';

describe('IconsBootstrapComponent', () => {
  let component: IconsBootstrapComponent;
  let fixture: ComponentFixture<IconsBootstrapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsBootstrapComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
