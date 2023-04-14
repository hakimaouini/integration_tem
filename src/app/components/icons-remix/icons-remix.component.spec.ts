import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsRemixComponent } from './icons-remix.component';

describe('IconsRemixComponent', () => {
  let component: IconsRemixComponent;
  let fixture: ComponentFixture<IconsRemixComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsRemixComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IconsRemixComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
