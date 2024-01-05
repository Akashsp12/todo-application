import { Component, OnInit } from '@angular/core';
import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonRow, IonText, IonTitle } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';
import { ButtonComponent } from '../components/button/button.component';
import { AccountProvidersComponent } from '../components/account-providers/account-providers.component';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [IonContent, IonImg, IonLabel, IonTitle, IonList, IonInput, IonItem, IonIcon, IonButton, FeatherIconsModule, IonCheckbox, IonText,ButtonComponent,AccountProvidersComponent]
})
export class SigninComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
