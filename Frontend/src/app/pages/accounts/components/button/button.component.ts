
import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';

import { IonButton, Platform } from '@ionic/angular/standalone';





@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  standalone: true,
  imports: [IonButton],
  providers: []
})
export class ButtonComponent implements OnInit {
  @Output() accountSign: EventEmitter<any> = new EventEmitter();
  @Input() buttonTitle: any

  constructor(private platform: Platform) { }

  ngOnInit() {

  }


  

}
