import { Component, OnInit } from '@angular/core';
import { TasksegmentComponent } from './components/tasksegment/tasksegment.component';
import { IonContent, IonHeader, IonRouterOutlet } from '@ionic/angular/standalone';
import { CardComponent } from 'src/app/components/card/card.component';
import { DatepickerComponent } from 'src/app/components/datepicker/datepicker.component';

@Component({
  selector: 'app-taskmanager',
  templateUrl: './taskmanager.component.html',
  styleUrls: ['./taskmanager.component.scss'],
  standalone: true,
  imports: [TasksegmentComponent, IonRouterOutlet, IonHeader, IonContent,CardComponent,DatepickerComponent]
})
export class TaskmanagerComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
