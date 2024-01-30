import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/angular/standalone';

import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { DatepickerComponent } from './datepicker/datepicker.component';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { TaskService } from 'src/app/service/tasks/task.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonLabel, IonList, NgFor, IonItem, IonItemDivider, IonItemGroup, CardinfoComponent, IonContent, DatepickerComponent, NgIf],
  providers: [TaskService]
})
export class CardComponent implements OnInit {
  a = [1, 2, 5]
  config: any;
  progressData: any;
  completedData: any;
  todoStatus: any;
  constructor(private route: ActivatedRoute, private taskSr: TaskService, private router: Router) { }
  ionViewWillEnter(){
    this.route.params.subscribe((res) => {
      this.config = res['task'] == 'config' ? "config" : "home"
    })
  }
  ngOnInit() {
 

  }

  getCurrentDateResult(date: any) {
    console.log(date)
    const passDate = { result: this.dateSplit(date) }
    this.getTaskByDate(passDate)
  }




  getTaskByDate(date: any) {
    this.taskSr.getTaskFromDb(date).subscribe(async (res: any) => {
      console.log(res);
      this.todoStatus = res.dataEmpty
      if (res.result) {
        this.progressData = res.result.filter((x: any) => x.taskStatus === 'inProgress')
        this.completedData = res.result.filter((x: any) => x.taskStatus !== 'inProgress')
        console.log(this.completedData.length);
        console.log(this.progressData.length);
      }
    })
  }

 


  dateSplit(date: any) {
    var dateObject = new Date(date);
    return this.toJSONLocal(dateObject)
  }
  toJSONLocal(date: any) {
    var local = new Date(date);
    local.setMinutes(date.getMinutes() - date.getTimezoneOffset());
    return local.toJSON().slice(0, 10);
  }
}
