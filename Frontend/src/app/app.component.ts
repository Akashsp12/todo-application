import { Component } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { GoogleAuth } from '@codetrix-studio/capacitor-google-auth';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader, HeaderComponent, IonContent, HttpClientModule],
})
export class AppComponent {
  constructor() {
    GoogleAuth.initialize({
      clientId: '152154204031-0k169b8hvl5gkrg3kbq3r4ctol94t03i.apps.googleusercontent.com',
      grantOfflineAccess: true,
      scopes: ["profile", "email"]
    })
  }
}
