import { NgFor } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTextarea } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';
import { TaskService } from 'src/app/service/tasks/task.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  standalone: true,
  providers: [TaskService],
  imports: [IonList, IonItem, IonInput, IonGrid, IonRow, IonCol, IonButton, FeatherIconsModule, IonSelect, IonSelectOption, IonTextarea, IonLabel, IonDatetime, IonButtons, IonContent, IonDatetimeButton, IonModal, IonAccordion, IonAccordionGroup, IonHeader, NgFor, ReactiveFormsModule, FormsModule]
})
export class AddTaskComponent implements OnInit {
  mydate: any
  taskFormtemplate = {
    taskTitle: new FormControl(null, [Validators.required]),
    taskCategory: new FormControl(null, [Validators.required]),
    taskPriority: new FormControl(null, [Validators.required]),
    taskDatetime: new FormControl(null, [Validators.required]),
    taskDescription: new FormControl(null, [Validators.required]),
  };
  todoCategories = [
    "Personal Tasks",
    "Work Tasks",
    "Study/ Education",
    "Shopping",
    "Health and Fitness",
    "Finance",
    "Home Maintenance",
    "Social",
    "Travel",
    "Entertainment",
    "Goal Setting",
    "Hobbies",
    "Deadlines",
    "Someday/Maybe",
    "Daily Routine",
    "Inbox/Unsorted",
    "Priority Levels",
    "Collaborative Tasks",
    "Event Planning",
    "Reminders"
  ];
  reactiveForm: any = FormGroup
  constructor(
    private taskService: TaskService
  ) { }

  ngOnInit() {
    this.reactiveForm = new FormGroup(
      this.taskFormtemplate
    )
  }

  selectedDate: any; // Declare a variable to store the selected date

  async taskSubmitted() {
    if (this.reactiveForm.valid && this.reactiveForm.status == "VALID") {
      console.log(this.reactiveForm);
       this.taskService.AddtaskFunction(this.reactiveForm.value).subscribe(async (res: any) => {
        console.log(res);
      })
    } else {
      alert("check the form before add")
    }

  }

}
