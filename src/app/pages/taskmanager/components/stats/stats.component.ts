import { NgFor } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  standalone: true,
  imports: [IonContent, IonList, NgFor, IonItem, IonIcon, IonButton, IonInput, FeatherIconsModule, IonLabel, IonCard, IonCardContent]
})
export class StatsComponent implements OnInit {
  @ViewChild('categoryList') categoryList: any
  constructor() { }
  categoryArray: any = []
  ngOnInit() {

  }
  addCategory(ev: any) {
    let a = ev
    if (ev.length > 1) {
      this.categoryArray.push(a)
    }
  }


}
