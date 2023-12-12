import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: 'addtask',
    loadComponent: () => import('./pages/add-task/add-task.component').then((m) => m.AddTaskComponent),
  },
  {
    path: 'focus-mode',
    loadComponent: () => import('./pages/focus-mode/focus-mode.component').then((m) => m.FocusModeComponent),
  },

];

