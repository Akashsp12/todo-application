import { Component, Input, OnInit } from '@angular/core';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonLabel } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-focuscard',
  templateUrl: './focuscard.component.html',
  styleUrls: ['./focuscard.component.scss'],
  standalone: true,
  imports: [IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent, IonLabel, FeatherIconsModule, IonItem]
})
export class FocuscardComponent implements OnInit {
  @Input('histroy') focusTime: any
  @Input() title: any
  constructor() { }
  
  ngOnInit() { }

}
