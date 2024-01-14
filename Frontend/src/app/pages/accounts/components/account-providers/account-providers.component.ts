import { Component, Input, OnInit } from '@angular/core';
import { IonAvatar, IonButton, IonImg, IonItem, IonLabel, IonText, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-account-providers',
  templateUrl: './account-providers.component.html',
  styleUrls: ['./account-providers.component.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonButton, IonText, IonTitle]
})
export class AccountProvidersComponent implements OnInit {
  @Input() title: any
  content: any;
  constructor() { }

  ngOnInit() {
    this.content = this.title === 'Sign up' ? "Already have an Account? sign in" : "Don't have an account ? sign up"
  }

}
