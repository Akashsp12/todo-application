import { Component, OnInit } from '@angular/core';
import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonGrid, IonInput, IonItem, IonLabel, IonList, IonModal, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTextarea } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  standalone:true,
  imports:[IonList,IonItem,IonInput,IonGrid,IonRow,IonCol,IonButton,FeatherIconsModule,IonSelect,IonSelectOption,IonTextarea,IonLabel,IonDatetime,IonButtons,IonContent,IonDatetimeButton,IonModal,IonAccordion,IonAccordionGroup]
})
export class AddTaskComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
