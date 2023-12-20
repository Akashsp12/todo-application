import { Component, OnInit } from '@angular/core';
import { FocuscardComponent } from './components/focuscard/focuscard.component';
import { FocussegmentButtonComponent } from './components/focussegment-button/focussegment-button.component';
import { IonContent } from '@ionic/angular/standalone';
import { FocusChartComponent } from './components/focus-chart/focus-chart.component';

@Component({
  selector: 'app-focus-stats',
  templateUrl: './focus-stats.component.html',
  styleUrls: ['./focus-stats.component.scss'],
  standalone: true,
  imports: [FocuscardComponent, FocussegmentButtonComponent, IonContent,FocusChartComponent]
})
export class FocusStatsComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
