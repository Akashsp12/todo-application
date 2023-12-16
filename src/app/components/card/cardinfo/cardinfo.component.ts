import { NgIf } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/angular/standalone';
import { FeatherComponent } from 'angular-feather';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.scss'],
  standalone: true,
  imports: [IonItemSliding,NgIf, IonItemOptions, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, FeatherIconsModule, IonCardContent, IonLabel, IonItemOption]
})
export class CardinfoComponent implements OnInit {
  @Input() taskconfig: any
  constructor() { }

  a = [1, 2]
  async ngOnInit() {
    // alert(this.taskconfig)
    await console.log(this.taskconfig)
  }


}
