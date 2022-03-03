import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoadsterInfoComponent } from './roadster-info.component';

describe('RoadsterInfoComponent', () => {
  let component: RoadsterInfoComponent;
  let fixture: ComponentFixture<RoadsterInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoadsterInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoadsterInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
