import { Component, Inject, ViewChild } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatDialogModule } from '@angular/material/dialog';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatListModule } from '@angular/material/list';
import { LogEntry } from 'Types/bot';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-bot-history-dialog',
  standalone: true,
  imports: [MatDialogModule, MatPaginatorModule, MatListModule, CommonModule, MatButtonModule],
  templateUrl: './bot-history-dialog.component.html',
  styleUrl: './bot-history-dialog.component.scss'
})
export class BotHistoryDialogComponent {
  lowValue: number = 0;
  highValue: number = 10;
  logEntries: LogEntry[] = [];

  constructor(
    public dialogRef: MatDialogRef<BotHistoryDialogComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
      for (let index = 0; index < 500; index++) {
        this.logEntries.push({ timestamp: new Date(), eventType: 'Start', details: 'Bot started '+ index });
      }
     }

  ngOnInit(): void {
  }
  onClose(): void {
    this.dialogRef.close();
  }

  public getPaginatorData(event: PageEvent): PageEvent {
    this.lowValue = event.pageIndex * event.pageSize;
    this.highValue = this.lowValue + event.pageSize;
    return event;
  }
}
