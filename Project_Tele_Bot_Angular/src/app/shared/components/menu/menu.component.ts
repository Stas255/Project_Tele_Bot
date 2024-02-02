import { Component } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { ElectronRenderService } from '../../../core/service/electron-render/electron-render-service.service';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [MatToolbarModule, MatButtonModule, MatMenuModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss'
})
export class MenuComponent {
  someData = '';

  constructor(private electronRenderService: ElectronRenderService) {
  }

  async Call() {
    if (this.electronRenderService) {
      this.someData += await this.electronRenderService.callFunction('getSomeData', true);
    }
  }
  ngOnInit() {
    this.Call();
  }
}
