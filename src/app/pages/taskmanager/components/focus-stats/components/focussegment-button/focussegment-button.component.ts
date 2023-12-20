import { Component, OnInit } from '@angular/core';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-focussegment-button',
  templateUrl: './focussegment-button.component.html',
  styleUrls: ['./focussegment-button.component.scss'],
  standalone:true,
  imports:[IonSegment,IonSegmentButton,IonLabel]
})
export class FocussegmentButtonComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
