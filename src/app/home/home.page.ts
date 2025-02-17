import { Component } from '@angular/core';
import { HeaderComponent } from '../components/header/header.component';
import { DatepickerComponent } from '../components/card/datepicker/datepicker.component';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { CardComponent } from '../components/card/card.component';
import { IonContent, IonFab, IonFabButton, IonHeader, IonIcon, IonRouterOutlet } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';




@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonContent, HeaderComponent, DatepickerComponent, FeatherIconsModule, CardComponent, IonFab, IonFabButton, IonIcon, RouterLink, IonHeader, IonRouterOutlet],
})
export class HomePage {

  constructor() { }

  ngOnInit() {

  }



}
