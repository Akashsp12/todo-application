import { Component, OnInit } from '@angular/core';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { IonButton, IonButtons, IonContent, IonHeader, IonMenu, IonMenuButton, IonMenuToggle, IonTitle, IonToolbar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports:[FeatherIconsModule,IonMenuButton,IonButton,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonButtons]

})

export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
