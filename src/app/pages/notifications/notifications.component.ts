import { Component, OnInit } from '@angular/core';
import { IonButton, IonContent, IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList, IonListHeader, IonNote, IonText } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss'],
  standalone:true,
  imports:[IonList,IonListHeader,IonContent,IonButton,IonItem,IonLabel,IonText,IonNote,IonIcon,FeatherIconsModule,IonItemSliding,IonItemOption,IonItemOptions]
})
export class NotificationsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
