import { JsonPipe } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
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
  @Output() accountSign: EventEmitter<any> = new EventEmitter();
  @Input() buttonTitle: any

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
    this.accountSign.emit()
    // try {
    //   const googleUser = await GoogleAuth.signIn();
    //   this.user = googleUser
    // } catch (error) {
    //   this.user = error
    // }






  }

}
