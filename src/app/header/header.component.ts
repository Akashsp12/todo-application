import { Component, OnInit } from '@angular/core';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { IonButton, IonButtons,IonBadge, IonContent, IonHeader, IonMenu, IonMenuButton, IonMenuToggle, IonTitle, IonToolbar, IonItem, IonIcon, IonLabel, IonNote, IonList, IonSegment, IonSegmentButton, IonAvatar } from '@ionic/angular/standalone';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone:true,
  imports:[FeatherIconsModule,IonMenuButton,IonButton,IonMenu,IonHeader,IonToolbar,IonTitle,IonContent,IonButtons,IonBadge,IonItem,IonIcon,IonLabel,IonNote,IonList,IonSegment,IonSegmentButton,IonAvatar]

})

export class HeaderComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
