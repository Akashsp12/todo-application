import { NgModule } from '@angular/core';
import { FeatherModule } from 'angular-feather';
import { Bell, Camera, ArrowRightCircle, Star,Lock, PlusSquare, Home, Crosshair, Activity, List, Settings, Moon, Sun, Calendar, Clock, PlusCircle, Users, ThumbsUp, HelpCircle, Info, Mail, User } from 'angular-feather/icons';

const icons = {
  Camera,
  Bell,
  ArrowRightCircle,
  Star,
  PlusSquare,
  PlusCircle,
  Home,
  Crosshair,
  Activity,
  List,
  Settings,
  Moon,
  Sun,
  Calendar,
  Clock,
  Users,
  ThumbsUp,
  HelpCircle,
  Info,
  Mail,
  Lock,
  User
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