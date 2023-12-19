import { Component, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-focuscard',
  templateUrl: './focuscard.component.html',
  styleUrls: ['./focuscard.component.scss'],
  standalone:true,
  imports:[IonCard,IonCardHeader,IonCardTitle,IonCardSubtitle,IonCardContent,IonLabel]
})
export class FocuscardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
