import { Component, OnInit } from '@angular/core';
import { IonCol, IonGrid, IonItem, IonLabel, IonRow, IonText } from '@ionic/angular/standalone';

@Component({
  selector: 'app-taskdata',
  templateUrl: './taskdata.component.html',
  styleUrls: ['./taskdata.component.scss'],
  standalone: true,
  imports: [IonGrid, IonRow, IonCol, IonLabel, IonItem,IonText]
})
export class TaskdataComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
