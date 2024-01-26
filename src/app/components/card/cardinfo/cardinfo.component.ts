import { NgFor, NgIf } from '@angular/common';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/angular/standalone';
import { FeatherComponent } from 'angular-feather';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-cardinfo',
  templateUrl: './cardinfo.component.html',
  styleUrls: ['./cardinfo.component.scss'],
  standalone: true,
  imports: [IonItemSliding, NgIf, IonItemOptions, IonItem, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, FeatherIconsModule, IonCardContent, IonLabel, IonItemOption, NgFor]
})
export class CardinfoComponent implements OnInit {
  @Input() taskconfig: any
  @Input('progressData') Datas: any
  constructor(private router: Router) { }

  a = [1, 2]
  async ngOnInit() {
    await console.log(this.taskconfig)

  }
  editTodo(id: any) {
    this.router.navigate(['home/edit-task/' + id])
  }
  // edit-task/:id
}
