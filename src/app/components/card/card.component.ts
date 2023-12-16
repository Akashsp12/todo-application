import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { IonContent, IonItem, IonItemDivider, IonItemGroup, IonLabel, IonList } from '@ionic/angular/standalone';

import { CardinfoComponent } from './cardinfo/cardinfo.component';
import { DatepickerComponent } from '../datepicker/datepicker.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone: true,
  imports: [IonLabel, IonList, NgFor, IonItem, IonItemDivider, IonItemGroup, CardinfoComponent, IonContent, DatepickerComponent]
})
export class CardComponent implements OnInit {
  a = [1, 2, 5]
  config: any;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((res) => {

      this.config = res['task'] == 'config' ? "config" : "home"
      console.log(this.config)
    })



  }

}
