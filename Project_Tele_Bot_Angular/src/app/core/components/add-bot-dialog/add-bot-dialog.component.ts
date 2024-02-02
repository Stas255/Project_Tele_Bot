import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MAT_DIALOG_DATA, MatDialogModule } from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-bot-dialog',
  standalone: true,
  imports: [MatDialogModule, MatButtonModule, MatFormFieldModule, FormsModule, MatInputModule],
  templateUrl: './add-bot-dialog.component.html',
  styleUrl: './add-bot-dialog.component.scss'
})
export class AddBotDialogComponent {
  //constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }
  public token: string = '';
}
