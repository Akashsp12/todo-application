import { Component, OnInit } from '@angular/core';
import { IonLabel } from '@ionic/angular/standalone';

@Component({
  selector: 'app-account-providers',
  templateUrl: './account-providers.component.html',
  styleUrls: ['./account-providers.component.scss'],
  standalone:true,
  imports:[IonLabel]
})
export class AccountProvidersComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
