import { Component, OnInit } from '@angular/core';
import { IonButton, IonCheckbox, IonCol, IonContent, IonGrid, IonIcon, IonImg, IonInput, IonItem, IonLabel, IonList, IonRow, IonText, IonTitle } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';
import { ButtonComponent } from '../components/button/button.component';
import { AccountProvidersComponent } from '../components/account-providers/account-providers.component';
import { Router } from '@angular/router';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss'],
  standalone: true,
  imports: [IonContent, IonImg, IonLabel, IonTitle, IonList, IonInput, IonItem, IonIcon, IonButton, FeatherIconsModule, IonCheckbox, IonText, ButtonComponent, AccountProvidersComponent,NgIf]
})
export class SigninComponent implements OnInit {
  log: any;
  mainContent: String = ''
  routePath: any;
  buttonContent: any
  signEnable: boolean = false
  signupEnable: boolean = false
  constructor(private router: Router) { }

  ngOnInit() {
    this.routePath = this.router.url
    this.mainContent = this.routePath === '/sign-up' ? "Sign up to create your account" : "Sign in to access your account"
    this.buttonContent = this.routePath === '/sign-up' ? "Sign up" : "Sign in"
    this.signEnable = this.routePath === '/sign-in' ? true : false
    this.signupEnable = this.routePath === '/sign-up' ? true : false

  }
  ionViewWillEnter() {
    this.log = '../../../../assets/icon/Screenshot__348_-removebg-preview 2.png'
  }

}
