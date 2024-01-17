import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { TaskdataComponent } from './components/taskdata/taskdata.component';
import { OthersComponent } from './components/others/others.component';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  standalone:true,
  imports:[IonContent,UserprofileComponent,TaskdataComponent,OthersComponent]
})
export class SettingComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
