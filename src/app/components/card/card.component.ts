import { NgFor } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonList } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone:true,
  imports:[IonCard,IonCardContent,IonCardTitle,IonCardHeader,IonCardSubtitle,IonList,IonItemSliding,IonItemOptions,IonItemOption,IonItem,IonLabel,FeatherIconsModule,NgFor,IonItemDivider]
})
export class CardComponent  implements OnInit {
a=[1,2,5,10,5,58,5,5,65]
  constructor() { }

  ngOnInit() {}

}
