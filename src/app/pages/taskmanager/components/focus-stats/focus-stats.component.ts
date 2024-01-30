import { Component, OnInit } from '@angular/core';
import { FocuscardComponent } from './components/focuscard/focuscard.component';
import { FocussegmentButtonComponent } from './components/focussegment-button/focussegment-button.component';
import { IonContent } from '@ionic/angular/standalone';
import { FocusChartComponent } from './components/focus-chart/focus-chart.component';
import { TaskService } from 'src/app/service/tasks/task.service';

@Component({
  selector: 'app-focus-stats',
  templateUrl: './focus-stats.component.html',
  styleUrls: ['./focus-stats.component.scss'],
  standalone: true,
  imports: [FocuscardComponent, FocussegmentButtonComponent, IonContent, FocusChartComponent],
  providers: [TaskService]
})
export class FocusStatsComponent implements OnInit {
  allFocus: any;
  todayFocus: any;

  constructor(private taskSr: TaskService) { }
  ionViewWillEnter (){
    this.taskSr.getAllFocusTime().subscribe(async (res: any) => {
      console.log(res);
      this.allFocus = res.result.allFocus
      this.todayFocus = res.result.todayFocus
    })
  }
  ngOnInit() {
   
  }

}
