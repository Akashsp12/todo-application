import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {  IonItem, IonItemDivider, IonItemGroup,  IonLabel,IonList } from '@ionic/angular/standalone';

import { CardinfoComponent } from './cardinfo/cardinfo.component';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  standalone:true,
  imports:[IonLabel,IonList,NgFor,IonItem,IonItemDivider,IonItemGroup,CardinfoComponent]
})
export class CardComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
