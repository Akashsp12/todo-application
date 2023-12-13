import { Component, OnDestroy, OnInit } from '@angular/core';
import { IonButton, IonContent, IonDatetime, IonDatetimeButton, IonModal } from '@ionic/angular/standalone';


@Component({
  selector: 'app-focus-mode',
  templateUrl: './focus-mode.component.html',
  styleUrls: ['./focus-mode.component.scss'],
  standalone: true,
  imports: [IonContent, IonButton, IonDatetime, IonModal, IonDatetimeButton]
})
export class FocusModeComponent implements OnInit {

  timing: any = `00:00:00`;
  currentTime: any;

  ngOnInit() {
    const time = new Date()
    this.timing = this.getStringDate(time)
    console.log(this.timing)
  }
  startTime() {
    let a = setInterval(() => {
      if (this.timing == 0) {
        clearInterval(a)
      } else {
        this.timing--
      }

    }, 1000)

  }
  getSetTimer(ev: any) {
    this.timing = this.getStringDate(new Date(ev.detail.value))
  }

  getStringDate(timer: any) {
    // this.currentTime = new Date()
    const hr = timer.getHours()
    const min = timer.getMinutes()
    const sec = timer.getSeconds()
    console.log(hr)
    console.log(min)
    console.log(sec)
    return `${hr}:${min}`
  }
  click() {
    alert(this.timing)
  }
}

