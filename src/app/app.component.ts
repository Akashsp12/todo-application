import { Component } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseAuthenticationService } from './service/firebase/firebase-authentication.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader, HeaderComponent, IonContent, HttpClientModule],
})
export class AppComponent {
  constructor(private firebaseService: FirebaseAuthenticationService) {
    this.initializeApp()

  }
  private async initializeApp(): Promise<void> {
    await this.firebaseService.initialize();
  }
}
