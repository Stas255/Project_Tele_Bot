import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotManagementComponent } from './bot-management.component';

describe('BotManagementComponent', () => {
  let component: BotManagementComponent;
  let fixture: ComponentFixture<BotManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotManagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
