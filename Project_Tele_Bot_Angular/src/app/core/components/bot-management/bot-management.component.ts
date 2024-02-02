import { Component } from '@angular/core';
import { BotInfor } from 'Types/bot';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { AddBotDialogComponent } from '../add-bot-dialog/add-bot-dialog.component';
import {MatButtonModule} from '@angular/material/button';
import { BotHistoryDialogComponent } from '../bot-history-dialog/bot-history-dialog.component';
import { BotControlDialogComponent } from '../bot-control-dialog/bot-control-dialog.component';

@Component({
  selector: 'app-bot-management',
  standalone: true,
  imports: [MatCardModule, MatListModule, MatIconModule, CommonModule, MatButtonModule],
  templateUrl: './bot-management.component.html',
  styleUrl: './bot-management.component.scss'
})
export class BotManagementComponent {
  bots: Map<number,BotInfor> = new Map();

  constructor(private dialog: MatDialog, private snackBar: MatSnackBar) {
    this.bots.set(1,{
      id: 1,
      lastActive: new Date(),
      name: "Test",
      status: 'online',
      requestsPerHour: 100
    });
    this.bots.set(2,{
      id: 2,
      lastActive: new Date(),
      name: "Test2",
      status: 'offline',
      requestsPerHour: 200
    });
   }

  ngOnInit(): void {
    // Initialize bots list, ideally this would be fetched from an API
  }

  controlBot(botId: number): void {
    const bot = this.bots.get(botId);
    const dialogRef = this.dialog.open(BotControlDialogComponent, {
      width: 'avto',
      data: bot
    });
  
    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.bots.set(botId, result);
      }
    });
  }

  showHistory(botId: number): void {
    const bot = this.bots.get(botId);
    const dialogRef = this.dialog.open(BotHistoryDialogComponent, {
      width: '80%',
      data: { botId: botId, botName: bot?.name }
    });
  
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      // Логіка після закриття діалогу, якщо потрібно
    });
  }

  pauseBot(botId: number): void {
    this.bots.get(botId)!.status = 'offline';
  }
  
  resumeBot(botId: number): void {
    this.bots.get(botId)!.status = 'online';
  }
  
  deleteBot(botId: number): void {
    this.bots.delete(botId);
  }

  openAddBotDialog(): void {
    const dialogRef = this.dialog.open(AddBotDialogComponent, {
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        const id  = Math.floor(Math.random() * 100);
        this.bots.set(id,{
          id: id,
          lastActive: new Date(),
          name: result,
          status: 'offline',
          requestsPerHour: Math.floor(Math.random() * 1000)
        });
      }
      console.log('The dialog was closed', result);
      // Тут можна додати логіку додавання бота в список
    });
  }

  get botsArray(): BotInfor[] {
    return Array.from(this.bots.values());
  }
  
}
