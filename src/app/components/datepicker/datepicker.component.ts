import { CommonModule, NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChildren } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonButton, IonLabel } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  standalone: true,
  imports: [CommonModule, IonHeader, IonToolbar, IonTitle, IonButton, IonContent, IonRefresher, IonRefresherContent,IonLabel, IonList,FeatherIconsModule]
})
export class DatepickerComponent implements OnInit {
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
    this.getweekEnd()
  }
  getMoreDates(){
    this.temp++
    this.getweekEnd()
  }
  
  getweekEnd() {

    // console.log(this.temp)
   

      // this.temp++;
    
    const date = new Date()
    const currentDate = date.getDate()
    const currentMonth = date.getMonth()
    const currentYear = date.getFullYear()



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
    this.finalresult.concat(dateInString2)

    }



  }
  hi(ev: any) {
    console.log(ev)
    // alert(ev)
  }
}


