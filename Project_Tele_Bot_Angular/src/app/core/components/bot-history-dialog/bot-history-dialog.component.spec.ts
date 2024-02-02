import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BotHistoryDialogComponent } from './bot-history-dialog.component';

describe('BotHistoryDialogComponent', () => {
  let component: BotHistoryDialogComponent;
  let fixture: ComponentFixture<BotHistoryDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BotHistoryDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BotHistoryDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
