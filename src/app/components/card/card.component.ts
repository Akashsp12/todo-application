import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone:true,
  imports:[IonCard,IonCardContent,IonCardTitle,IonCardHeader,IonCardSubtitle]
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
