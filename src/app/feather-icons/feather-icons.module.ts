import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Bell, Camera, ArrowRightCircle, Star, PlusSquare, Home, Crosshair, Activity, List, Settings, Moon, Sun } from 'angular-feather/icons';

const icons = {
  Camera,
  Bell,
  ArrowRightCircle,
  Star,
  PlusSquare,
  Home,
  Crosshair,
  Activity,
  List,
  Settings,
  Moon,
  Sun
};

@NgModule({
  imports: [
    FeatherModule.pick(icons)
  ],
  exports: [
    FeatherModule
  ]
})
export class FeatherIconsModule { }