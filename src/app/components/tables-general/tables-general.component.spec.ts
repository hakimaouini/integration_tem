import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesGeneralComponent } from './tables-general.component';

describe('TablesGeneralComponent', () => {
  let component: TablesGeneralComponent;
  let fixture: ComponentFixture<TablesGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesGeneralComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TablesGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
