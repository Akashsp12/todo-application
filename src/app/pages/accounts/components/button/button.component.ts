import { Component, OnInit, inject } from '@angular/core';
import { IonButton } from '@ionic/angular/standalone';
import {
  Auth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  GoogleAuthProvider
} from '@angular/fire/auth';
import { AngularFireAuth } from '@angular/fire/compat/auth';




@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton],
  providers: []
})
export class ButtonComponent implements OnInit {
  // ;private afAuth: AngularFireAuth

  constructor(private auth: Auth) {

  }

  ngOnInit() { }


  async signin() {
    try {
      
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(this.auth,provider);
      const user = result.user;
      console.log(user);
    } catch (error) {
      console.error(error);
    }

  }

}
