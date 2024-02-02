import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBotDialogComponent } from './add-bot-dialog.component';

describe('AddBotDialogComponent', () => {
  let component: AddBotDialogComponent;
  let fixture: ComponentFixture<AddBotDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddBotDialogComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddBotDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
