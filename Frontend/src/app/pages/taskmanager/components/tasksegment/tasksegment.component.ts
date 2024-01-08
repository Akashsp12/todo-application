import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IonLabel, IonSegment, IonSegmentButton } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tasksegment',
  templateUrl: './tasksegment.component.html',
  styleUrls: ['./tasksegment.component.scss'],
  standalone: true,
  imports: [IonSegment, IonSegmentButton, IonLabel]
})
export class TasksegmentComponent implements OnInit {
  segmentValue: string = 'Task';

  constructor(private router: Router) { }

  ngOnInit() { }

  segmentFunction(ev: any) {
    if (ev.detail.value === 'Stats') {
      this.segmentValue = 'Stats'
      this.router.navigate(['home/task/stats'])
    } else if (ev.detail.value === 'Focus') {
      this.segmentValue = 'Focus'
      this.router.navigate(['home/task/focus-stats'])
    }
    else {
      this.router.navigate(['home/task/mananger/config'])
    }
  }

}
