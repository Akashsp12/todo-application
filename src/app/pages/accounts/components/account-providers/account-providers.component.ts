import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IonAvatar, IonButton, IonImg, IonItem, IonLabel, IonText, IonTitle } from '@ionic/angular/standalone';
// import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';
import { JsonPipe } from '@angular/common';
import { FirebaseAuthenticationService } from 'src/app/service/firebase/firebase-authentication.service';
@Component({
  selector: 'app-account-providers',
  templateUrl: './account-providers.component.html',
  styleUrls: ['./account-providers.component.scss'],
  standalone: true,
  imports: [IonLabel, IonAvatar, IonButton, IonText, IonTitle, JsonPipe]
})
export class AccountProvidersComponent implements OnInit {
  @Output() googleSign = new EventEmitter<any>();
  @Input() title: any
  content: any;
  user: any;
  constructor(private firebaseService: FirebaseAuthenticationService) {

  }

  ngOnInit() {
    this.content = this.title === 'Sign up' ? "Already have an Account? sign in" : "Don't have an account ? sign up"
  }

  async signin() {
    try {
      const googleUser = await this.firebaseService.signInWithGoogle()
      console.log()
      this.googleSign.emit(googleUser.user?.providerData[0])
    } catch (error) {
      console.log(error)
    }



  }



  signOut() {
    this.firebaseService.signOut()
  }
}