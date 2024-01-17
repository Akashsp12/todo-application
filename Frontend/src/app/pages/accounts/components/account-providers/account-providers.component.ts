import { Component, Input, OnInit } from '@angular/core';
import { IonAvatar, IonButton, IonImg, IonItem, IonLabel, IonText, IonTitle } from '@ionic/angular/standalone';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { JsonPipe } from '@angular/common';
@Component({
  selector: 'app-account-providers',
  templateUrl: './account-providers.component.html',
  styleUrls: ['./account-providers.component.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonButton, IonText, IonTitle, JsonPipe]
})
export class AccountProvidersComponent implements OnInit {
  @Input() title: any
  content: any;
  user: any;
  constructor() {
    this.initializeGoogleAuth()
  }

  ngOnInit() {
    this.content = this.title === 'Sign up' ? "Already have an Account? sign in" : "Don't have an account ? sign up"
  }
  async initializeGoogleAuth() {

    try {
      await GoogleAuth.initialize({ grantOfflineAccess: true });
      console.log('GoogleAuth initialized successfully');
    } catch (error) {
      console.error('Failed to initialize GoogleAuth', error);
    }

  }
  async signin() {

    try {
      const googleUser = await GoogleAuth.signIn();
      this.user = googleUser
    } catch (error) {
      this.user = error
    }






    // 
  }
}