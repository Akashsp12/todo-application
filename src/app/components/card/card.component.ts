import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/angular/standalone';

import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/service/tasks/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonLabel, IonList, NgFor, IonItem, IonItemDivider, IonItemGroup, CardinfoComponent, IonContent, DatepickerComponent],
  providers: [TaskService]
})
export class CardComponent implements OnInit {
  a = [1, 2, 5]
  config: any;
  constructor(private route: ActivatedRoute, private taskSr: TaskService) { }

  ngOnInit() {
    this.route.params.subscribe((res) => {
      this.config = res['task'] == 'config' ? "config" : "home"
    })
  }

  getCurrentDateResult(date: any) {
    const passDate = { result: this.dateSplit(date) }
    this.getTaskByDate(passDate)
  }




  getTaskByDate(date: any) {
    this.taskSr.getTaskFromDb(date).subscribe(async (res) => {
      console.log(res);
    })
  }







  dateSplit(date: any) {
    var dateObject = new Date(date);
    var datePart = dateObject.toISOString().split('T')[0];
    return datePart
  }
}
