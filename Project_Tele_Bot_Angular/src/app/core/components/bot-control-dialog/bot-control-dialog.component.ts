import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BotInfor } from 'Types/bot';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';

interface ChannelData {
  name: string;
  requestsPerHour: number;
  lastUpdate: Date;
}

@Component({
  selector: 'app-bot-control-dialog',
  standalone: true,
  imports: [MatDialogModule, MatFormFieldModule, FormsModule , MatInputModule, MatButtonModule, CommonModule, MatTableModule, MatIconModule],
  templateUrl: './bot-control-dialog.component.html',
  styleUrl: './bot-control-dialog.component.scss'
})
export class BotControlDialogComponent {
  name: string;
  botToken: string;
  limitUpdates: number;
  displayedColumns: string[] = ['name', 'requestsPerHour', 'lastUpdate'];
  channels: ChannelData[] = [];


  tempData: BotInfor;
  constructor(
    public dialogRef: MatDialogRef<BotControlDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: BotInfor
  ) {
    // Initialize tempData with a copy of the original data
    this.tempData = { ...data };
    this.name = data.name;
    this.botToken = '63sadasd58:AAHDewqeP3Mqeqweq8E-gIIusSiCmF_d_8';
    this.limitUpdates = 100;
    for (let index = 0; index < 20; index++) {
      this.channels.push({
        name: 'Channel '+index,
        requestsPerHour: 50,
        lastUpdate: new Date('2023-01-15T12:00:00')
      })
    }
  }

  ngOnInit(): void {
    // Ініціалізуйте дані за потребою
  }

  onSubmit(): void {
    this.dialogRef.close(this.tempData);
  }

  onCancel(): void {
    this.dialogRef.close();
  }

}
