import { Routes } from '@angular/router';
import { AuthGuard } from './guard/auth.guard';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'sign-in',
    pathMatch: 'full',
  },
  {
    path: 'sign-in',
    loadComponent: () => import('./pages/accounts/signin/signin.component').then((m) => m.SigninComponent),
  },
  {
    path: 'sign-up',
    loadComponent: () => import('./pages/accounts/signin/signin.component').then((m) => m.SigninComponent),
  },
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        loadComponent: () => import('./components/card/card.component').then((m) => m.CardComponent),
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
        path: 'settings',
        loadComponent: () => import('./pages/setting/setting.component').then((m) => m.SettingComponent),
        canActivate: [AuthGuard]
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
    ]
  },


];

