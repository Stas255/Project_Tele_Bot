import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppMetricComponent } from './app-metric.component';

describe('AppMetricComponent', () => {
  let component: AppMetricComponent;
  let fixture: ComponentFixture<AppMetricComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppMetricComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AppMetricComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
