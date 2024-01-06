import { Component, OnInit, inject } from '@angular/core';
import { IonButton, Platform } from '@ionic/angular/standalone';
import {
  Auth,
  signInWithPopup,
  GoogleAuthProvider
} from '@angular/fire/auth';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';




@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton],
  providers: []
})
export class ButtonComponent implements OnInit {
  constructor(private auth: Auth, private platform: Platform) {

  }

  ngOnInit() {
    if (this.platform.is('capacitor')) {
      alert('core platform');
    } else {
      alert('something else');
    }
  }


  async signin() {
    try {
      if (this.platform.is('capacitor')) {
        try {
          const googleUser = await GoogleAuth.signIn();
          console.log('Google user:', googleUser);
          // Proceed with handling the authenticated user data
        } catch (error) {
          console.error('Error during sign-in:', error);
          // Log the error details for further analysis
        }
      } else {

        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(this.auth, provider);
        const user = result.user;
        console.log(user);
      }

    } catch (error) {
      console.error(error);
    }

  }

}
