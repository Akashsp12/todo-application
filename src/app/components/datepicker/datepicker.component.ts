import { CommonModule, NgFor } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, Component, ElementRef, OnInit, SimpleChanges, ViewChild, ViewEncapsulation } from '@angular/core';
import { RefresherCustomEvent, IonHeader, IonToolbar, IonTitle, IonContent, IonRefresher, IonRefresherContent, IonList, IonButton, IonLabel, IonDatetime, IonModal } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss'],
  standalone: true,
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  // encapsulation: ViewEncapsulation.None,
  imports: [CommonModule, IonHeader, IonToolbar, IonDatetime, IonModal, IonTitle, IonButton, IonContent, IonRefresher, IonRefresherContent, IonLabel, IonList, FeatherIconsModule]
})
export class DatepickerComponent implements OnInit {
[x: string]: any;
  temp: number = 0
  finalresult: any[] = [];
  result: any[] = ['1', '2', '3']
  currentDate: any;
  dateInString: any;
  toggleYear: any;
  @ViewChild('scrollContainer', { read: ElementRef }) scrollContainerRef!: ElementRef;
  cuurentDate: any;
  Maxdate: any;
  monthYear: any;
  sliceDate!: number;
  currentMonth: any;
  currentYear: any;
  previousMonth: any;
new: any;


  constructor() { }

  ngOnInit() {
    this.getweekEnd()
  }
  getMoreDates() {
    this.temp++
    this.getweekEnd()
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }

  getweekEnd() {

    const date = new Date()
    this.currentDate = date.getDate()
    this.currentMonth = date.getMonth()
    this.currentYear = date.getFullYear()
    let currentDates = new Date(this.currentYear, this.currentMonth, this.currentDate)
    this.dateInString = this.getDateLong(currentDates)
    this.monthYear = this.getMonthYearLong(this.dateInString)
    this.sliceDate = new Date(this.currentYear, this.currentMonth + this.temp, this.currentDate).getDate()
    this.getAllDates()
  }
  hi(ev: any) {
    console.log(ev)
    // alert(ev)
  }
  monthPicker(ev: any,modal:any) {


    const date = new Date(ev.detail.value)
    this.cuurentDate = date.getDate();
    this.currentMonth = date.getMonth();
    this.currentYear = date.getFullYear();


    const daysInMonthss = new Date(this.currentYear, this.currentMonth + 1, 0)
    const dateInString2 = this.getDateLong(daysInMonthss)

    this.monthYear = this.getMonthYearLong(dateInString2)
    this.getAllDates()

    this.sliceDate = 0
    if (this.scrollContainerRef && this.scrollContainerRef.nativeElement) {
      this.scrollContainerRef.nativeElement.scrollTo({ left: 0, behavior: 'smooth' });
    }
    // modal.dismiss()
  }



  getAllDates() {


    this.finalresult = [] 
    const daysInMonths = new Date(this.currentYear, this.currentMonth + this.temp + 1, 0).getDate()
    for (let i = 1; i <= daysInMonths; i++) {
      const daysInMonthss = new Date(this.currentYear, this.currentMonth + this.temp, i)
      const dateInString2 = this.getDateLong(daysInMonthss)
      this.finalresult.push(dateInString2)

    }
  }
  getDateLong(date: any) {
    return date.toLocaleDateString('en-us', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  getMonthYearLong(date: any) {
    return `${date.split(', ')[1].split(' ')[0]} ${date.split(', ')[2]}`
  }
}



