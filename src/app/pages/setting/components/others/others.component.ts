import { Component, OnInit } from '@angular/core';
import { IonIcon, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-others',
  templateUrl: './others.component.html',
  styleUrls: ['./others.component.scss'],
  standalone: true,
  imports: [IonList,IonItem,IonLabel,IonIcon,FeatherIconsModule]
})
export class OthersComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
