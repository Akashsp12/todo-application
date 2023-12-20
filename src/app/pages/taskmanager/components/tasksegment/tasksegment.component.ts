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
  sementValue: string = 'Task';

  constructor(private router: Router) { }

  ngOnInit() { }

  segmentfunction(ev: any) {
    if (ev.detail.value === 'Stats') {
      this.sementValue = 'Stats'
      this.router.navigate(['task/stats'])
    } else if (ev.detail.value === 'Focus') {
      this.sementValue = 'Focus'
      this.router.navigate(['task/focus-stats'])
    }
    else {
      this.router.navigate(['task/mananger/config'])
    }
  }

}
