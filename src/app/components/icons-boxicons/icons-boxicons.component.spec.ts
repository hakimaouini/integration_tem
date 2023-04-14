import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsBoxiconsComponent } from './icons-boxicons.component';

describe('IconsBoxiconsComponent', () => {
  let component: IconsBoxiconsComponent;
  let fixture: ComponentFixture<IconsBoxiconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsBoxiconsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsBoxiconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
