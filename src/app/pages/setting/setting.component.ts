import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { TaskdataComponent } from './components/taskdata/taskdata.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  standalone:true,
  imports:[IonContent,UserprofileComponent,TaskdataComponent]
})
export class SettingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
