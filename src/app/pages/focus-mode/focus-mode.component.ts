import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonContent, IonDatetime, IonDatetimeButton, IonModal, IonPicker } from '@ionic/angular/standalone';
import { Chart, registerables } from 'chart.js';
Chart.register(...registerables);

@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonDatetime, IonModal, IonDatetimeButton, IonPicker]
})
export class FocusModeComponent implements OnInit, AfterViewInit {

  timing: any = `00:00:00`;
  currentTime: any;
  yourPickerOptions!: any;
  intervalId: any;
  distance: any;
  timingInterval: any;
  chart: any = [];
  dasharray: any;
  @ViewChild('myCircle') myCircle!: ElementRef<SVGCircleElement>;


  ngAfterViewInit() {
    if (this.myCircle && this.myCircle.nativeElement) {
      this.dasharray = `0 502`
      this.myCircle.nativeElement.setAttribute('stroke-dasharray', this.dasharray);
    }
  }
  ngOnInit() {
    this.getFun()
    this.chart = new Chart('canvas', {
      type: 'bar',
      data: {
        labels: ['Monday'],
        datasets: [{
          label: 'Weekly Focus Time',
          data: [6, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {

        }
      }
    });

  }
  chartClick(ev: any) {
    var firstPoint = this.chart.getElementsAtEventMode(onclick, 'nearest', {
      intersect: true
    }, true)
    console.log(firstPoint)
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
          options: hoursArray.map(h => ({ text: h.toString().padStart(2, '0'), value: h }))
        },
        {
          name: 'minutes',
          options: minutesArray.map(m => ({ text: m.toString().padStart(2, '0'), value: m }))
        },
        {
          name: 'seconds',
          options: secondsArray.map(s => ({ text: s.toString().padStart(2, '0'), value: s }))
        }
      ]
    };

  }




  startTime() {
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
    const newDate = new Date(date.getTime() + hoursInMilliseconds + minutesInMilliseconds + secondsInMilliseconds);
    return newDate;
  }

  timeInterval(countdownTimer: any) {
    this.timingInterval = setInterval(() => {
      let now = new Date().getTime();
      var distance = countdownTimer - now


      if (distance <= 0) {

        clearInterval(this.timingInterval);

      } else {
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        this.timing = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`
        console.log(distance)
        this.dasharray = `${((distance * 502) / 100) / 100} 502`

        //  this.dasharray = `${((this.distance * 502) / 100) / 100} 502`;

        // Accessing the circle element and setting the stroke dash array
        this.myCircle.nativeElement.setAttribute('stroke-dasharray', this.dasharray);


      }
    }, 0)

  }


  stopTime() {
    clearInterval(this.timingInterval)

  }
}

