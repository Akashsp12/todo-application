import { Component, OnInit } from '@angular/core';
import { IonCol, IonDatetime, IonGrid, IonInfiniteScroll, IonItem, IonLabel, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  standalone: true,
  imports: [IonLabel, IonDatetime, IonItem,IonRow,IonCol,IonGrid,]
})
export class DatepickerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
  weekDays = ['Sun','Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', ];

 
}
