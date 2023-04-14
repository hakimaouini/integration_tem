import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesFaqComponent } from './pages-faq.component';

describe('PagesFaqComponent', () => {
  let component: PagesFaqComponent;
  let fixture: ComponentFixture<PagesFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesFaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PagesFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
