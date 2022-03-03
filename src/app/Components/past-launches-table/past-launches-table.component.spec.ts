import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastLaunchesTableComponent } from './past-launches-table.component';

describe('PastLaunchesTableComponent', () => {
  let component: PastLaunchesTableComponent;
  let fixture: ComponentFixture<PastLaunchesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastLaunchesTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PastLaunchesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
