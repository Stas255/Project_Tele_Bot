import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotControlDialogComponent } from './bot-control-dialog.component';

describe('BotControlDialogComponent', () => {
  let component: BotControlDialogComponent;
  let fixture: ComponentFixture<BotControlDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotControlDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotControlDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
