import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild, ViewChildren, inject } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonButton, IonLabel } from '@ionic/angular/standalone';

import { DataService, Message } from '../services/data.service';
import { HeaderComponent } from '../header/header.component';
import { DatepickerComponent } from '../components/datepicker/datepicker.component';
import { FeatherIconsModule } from '../feather-icons/feather-icons.module';
import { CardComponent } from '../components/card/card.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonRefresher, IonRefresherContent,IonLabel, IonList, HeaderComponent, DatepickerComponent, FeatherIconsModule,CardComponent],
})
export class HomePage {
  // private data = inject(DataService);

  temp: number = 0
  finalresult: any[] = [];
  result: any[] = ['1', '2', '3']
  currentDate: any;
  dateInString: any;
  toggleYear: any;
  @ViewChildren('scrollContainer', { read: ElementRef }) scrollContainers!: any;
  cuurentDate: any;
  constructor() { }

  ngOnInit() {

    this.getweekEnd('')
  }
  ngAfterViewInit() {

 
  }
  getweekEnd(ev: string) {

    // console.log(this.temp)
    if (ev == 'sub') {
      this.temp--;
    }
    if (ev == 'add') {
      this.temp++;
    }
    const date = new Date()
    const currentDate = date.getDate()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()

    // const daysInMonth = new Date(currentYear, currentMonth + this.temp, 0)




    this.currentDate = new Date(currentYear, currentMonth, currentDate)
    this.dateInString = this.currentDate.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
    const daysInMonth1 = new Date(currentYear, currentMonth + this.temp, 0)
    this.cuurentDate=new Date(currentYear, currentMonth + this.temp, currentDate).getDate()
    console.log(daysInMonth1)




    const daysInMonths = new Date(currentYear, currentMonth + this.temp + 1, 0).getDate()
    console.log(daysInMonths)

    for (let i = 1; i <= daysInMonths; i++) {

      const daysInMonthss = new Date(currentYear, currentMonth + this.temp, i)
      const dateInString2 = daysInMonthss.toLocaleDateString('en-us', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })

    this.finalresult.push(dateInString2)
      if (ev == 'add') {
        this.finalresult.concat(dateInString2)
      }

    }



  }
  hi(ev: any) {
    console.log(ev)
    // alert(ev)
  }


}
