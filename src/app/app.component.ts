import { Component } from '@angular/core';
import { IonApp, IonContent, IonHeader, IonRouterOutlet } from '@ionic/angular/standalone';
import { HeaderComponent } from './components/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FirebaseAuthenticationService } from './service/firebase/firebase-authentication.service';
import { ToastService } from './service/toast/toast.service';
import { ToastrModule } from 'ngx-toastr';



@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet, IonHeader, HeaderComponent, IonContent, HttpClientModule,ToastrModule],
  providers:[ToastService,ToastrModule]
})
export class AppComponent {
  constructor(private firebaseService: FirebaseAuthenticationService) {
    this.initializeApp()

  }
  private async initializeApp(): Promise<void> {
    await this.firebaseService.initialize();
  }
}
