import { Component, OnInit } from '@angular/core';
import { FocuscardComponent } from './components/focuscard/focuscard.component';

@Component({
  selector: 'app-focus-stats',
  templateUrl: './focus-stats.component.html',
  styleUrls: ['./focus-stats.component.scss'],
  standalone:true,
  imports:[FocuscardComponent]
})
export class FocusStatsComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
