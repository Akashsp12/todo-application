import { Component, OnInit } from '@angular/core';
import { IonContent } from '@ionic/angular/standalone';
import { UserprofileComponent } from './components/userprofile/userprofile.component';
import { TaskdataComponent } from './components/taskdata/taskdata.component';
import { OthersComponent } from './components/others/others.component';
import { UsersService } from 'src/app/service/users/users.service';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.scss'],
  standalone: true,
  imports: [IonContent, UserprofileComponent, TaskdataComponent, OthersComponent],
  providers: [UsersService]
})
export class SettingComponent implements OnInit {
  userprofile: any;

  constructor(private user: UsersService) { }

  async ngOnInit() {
    this.getprofile()


  }

  async getprofile() {

    await this.user.getUserDetails().subscribe((res: any) => {
      this.userprofile = res.result
    })
  }

}
