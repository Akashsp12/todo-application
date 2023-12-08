import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList } from '@ionic/angular/standalone';

import { DataService, Message } from '../services/data.service';
import { HeaderComponent } from '../header/header.component';
import { DatepickerComponent } from '../components/datepicker/datepicker.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList ,HeaderComponent,DatepickerComponent],
})
export class HomePage {
  private data = inject(DataService);
  constructor() {}


}
