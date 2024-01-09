import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonButton, IonImg, IonItem, IonLabel, IonText, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-account-providers',
  templateUrl: './account-providers.component.html',
  styleUrls: ['./account-providers.component.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonButton, IonText, IonTitle]
})
export class AccountProvidersComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
