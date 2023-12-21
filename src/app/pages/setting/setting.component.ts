import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { UserprofileComponent } from './components/userprofile/userprofile.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  standalone:true,
  imports:[IonContent,UserprofileComponent]
})
export class SettingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
