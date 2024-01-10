import { JsonPipe } from '@angular/common';
import { Component, OnInit, inject } from '@angular/core';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { IonButton, Platform } from '@ionic/angular/standalone';





@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton, JsonPipe],
  providers: []
})
export class ButtonComponent implements OnInit {

  constructor(private platform: Platform) { }

  ngOnInit() {
    this.initializeGoogleAuth()
  }
  user: any
  async initializeGoogleAuth() {

    // try {
    //   await GoogleAuth.initialize({ grantOfflineAccess: true });
    //   console.log('GoogleAuth initialized successfully');
    // } catch (error) {
    //   console.error('Failed to initialize GoogleAuth', error);
    // }

  }
  async signin() {
    try {
      const googleUser = await GoogleAuth.signIn();
      this.user = googleUser
    } catch (error) {
      this.user = error
    }






  }

}
