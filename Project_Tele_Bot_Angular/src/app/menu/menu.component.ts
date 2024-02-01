import { Component } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {

}
