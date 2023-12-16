import { Component, OnInit } from '@angular/core';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tasksegment',
  templateUrl: './tasksegment.component.html',
  styleUrls: ['./tasksegment.component.scss'],
  standalone: true,
  imports: [IonSegment, IonSegmentButton, IonLabel]
})
export class TasksegmentComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
