import { Routes } from '@angular/router';
import { BotManagementComponent } from './core/components/bot-management/bot-management.component';
import { AppMetricComponent } from './core/components/app-metric/app-metric.component';

export const routes: Routes = [
    { path: 'bot-management', component: BotManagementComponent },
    { path: '',   redirectTo: '/bot-management', pathMatch: 'full' },
    { path: 'app-metric', component: AppMetricComponent  },
];
