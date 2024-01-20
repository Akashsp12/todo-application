import { Injectable } from '@angular/core';
import { Capacitor } from '@capacitor/core';
import { environment } from '../../../environments/environment';
import {
  FirebaseAuthentication,
  SignInResult,
} from '@capacitor-firebase/authentication';
import { Platform } from '@ionic/angular/standalone';

import { initializeApp } from 'firebase/app';
@Injectable({
  providedIn: 'root'
})
export class FirebaseAuthenticationService {

  constructor(private readonly platform: Platform) { }


  public async initialize(): Promise<void> {
    if (this.platform.is('capacitor')) {
      return;
    }
    initializeApp(environment.firebaseConfig);
  }

  public async signInWithGoogle() {
    return await FirebaseAuthentication.signInWithGoogle({
      mode: 'popup',
    });
  }

  public async getRedirectResult(): Promise<SignInResult | undefined> {
    if (Capacitor.isNativePlatform()) {
      return;
    }
    return FirebaseAuthentication.getRedirectResult();
  }
  public async signOut(): Promise<void> {
    await FirebaseAuthentication.signOut();
  }

}
