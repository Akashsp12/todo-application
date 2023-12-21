import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonDatetime, IonDatetimeButton, IonLabel, IonModal, IonPicker } from '@ionic/angular/standalone';

import { FocusChartComponent } from '../taskmanager/components/focus-stats/components/focus-chart/focus-chart.component';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.scss'],
  standalone: true,
  imports: [IonContent, IonLabel, IonButton, IonDatetime, IonModal, IonDatetimeButton, IonPicker, FocusChartComponent, HttpClientModule]
})
export class FocusModeComponent implements OnInit, AfterViewInit {

  timing: any = `00:00:00`;
  currentTime: any;
  yourPickerOptions!: any;
  intervalId: any;
  distance: any;
  timingInterval: any;

  dasharray: any;
  @ViewChild('myCircle') myCircle!: ElementRef<SVGCircleElement>;
  totalDuration: any;
  started: boolean = false;


  ngAfterViewInit() {
    if (this.myCircle && this.myCircle.nativeElement) {
      this.dasharray = `0 502`
      this.myCircle.nativeElement.setAttribute('stroke-dasharray', this.dasharray);
    }
  }
  ngOnInit() {
    this.getFun()


  }

  getFun() {
    const hoursArray = Array.from({ length: 24 }, (_, index) => index);
    const minutesArray = Array.from({ length: 60 }, (_, index) => index);
    const secondsArray = Array.from({ length: 60 }, (_, index) => index);

    this.yourPickerOptions = {
      buttons: [{
        text: 'Cancel',
      }, {
        text: 'Confirm',
        handler: (avlue: any) => {
          console.log(avlue)
          this.timing = `${avlue.hours.text}:${avlue.minutes.text}:${avlue.seconds.text}`
        }
      }],
      columns: [
        {
          name: 'hours',
          options: hoursArray.map(h => ({ text: h.toString().padStart(2, '0') }))
        },
        {
          name: 'minutes',
          options: minutesArray.map(m => ({ text: m.toString().padStart(2, '0') }))
        },
        {
          name: 'seconds',
          options: secondsArray.map(s => ({ text: s.toString().padStart(2, '0') }))
        }
      ]
    };

  }




  startTime() {
    this.started = true
    let timer = this.timing
    let splitTimer = timer.split(':')
    this.currentTime = new Date();
    var next = this.AddMinutesToDate(this.currentTime, splitTimer[0], splitTimer[1], splitTimer[2]);
    let countdownTimer = next.getTime()
    this.timeInterval(countdownTimer)

  }



  AddMinutesToDate(date: any, hours: number, minutes: number, seconds: number): Date {
    const millisecondsInHour = 60 * 60 * 1000;
    const millisecondsInMinute = 60 * 1000;
    const hoursInMilliseconds = hours * millisecondsInHour;
    const minutesInMilliseconds = minutes * millisecondsInMinute;
    const secondsInMilliseconds = seconds * 1000;
    this.totalDuration = hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds
    const newDate = new Date(date.getTime() + hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds);
    return newDate;
  }

  timeInterval(countdownTimer: any) {
    this.timingInterval = setInterval(() => {
      let now = new Date().getTime();
      var distance = countdownTimer - now
      let percentageDistance = (distance / this.totalDuration) * 100

      if (distance <= 0) {

        clearInterval(this.timingInterval);

      } else {
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.timing = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`

        this.dasharray = `${(943 * percentageDistance) / 100}  943`;
        this.myCircle.nativeElement.setAttribute('stroke-dasharray', this.dasharray);


      }
    }, 0)

  }


  stopTime() {
    clearInterval(this.timingInterval)

  }
}

