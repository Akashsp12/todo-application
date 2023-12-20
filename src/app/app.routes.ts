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

  {
    path: 'notification',
    loadComponent: () => import('./pages/notifications/notifications.component').then((m) => m.NotificationsComponent),
  },
  {
    path: 'task',
    loadComponent: () => import('./pages/taskmanager/taskmanager.component').then((m) => m.TaskmanagerComponent),
    children: [
      {
        path: 'mananger/:task',
        loadComponent: () => import('./components/card/card.component').then((m) => m.CardComponent),
      },
      {
        path: 'stats',
        loadComponent: () => import('./pages/taskmanager/components/stats/stats.component').then((m) => m.StatsComponent)
      },
      {
        path: 'focus-stats',
        loadComponent: () => import('./pages/taskmanager/components/focus-stats/focus-stats.component').then((m) => m.FocusStatsComponent)
      }
    ]
  },

];

