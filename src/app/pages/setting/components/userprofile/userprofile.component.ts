import { Component, OnInit } from '@angular/core';
import { IonAvatar, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss'],
  standalone: true,
  imports: [IonAvatar, IonList, IonItem, IonLabel]
})
export class UserprofileComponent implements OnInit {

  constructor() { }

  ngOnInit() { }

}
