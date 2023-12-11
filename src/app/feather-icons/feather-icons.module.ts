import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Bell, Camera, ArrowRightCircle, Star, PlusSquare } from 'angular-feather/icons';

const icons = {
  Camera,
  Bell,
  ArrowRightCircle,
  Star,
  PlusSquare


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