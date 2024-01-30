import { NgFor, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCol, IonContent, IonDatetime, IonDatetimeButton, IonGrid, IonHeader, IonInput, IonItem, IonLabel, IonList, IonModal, IonRadio, IonRadioGroup, IonRow, IonSelect, IonSelectOption, IonTextarea } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';
import { TaskService } from 'src/app/service/tasks/task.service';
import { ToastService } from 'src/app/service/toast/toast.service';


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss'],
  standalone: true,
  providers: [TaskService],
  imports: [IonList, NgIf, IonItem, IonInput, IonGrid, IonRow, IonCol, IonButton, FeatherIconsModule, IonSelect, IonSelectOption, IonTextarea, IonLabel, IonDatetime, IonButtons, IonContent, IonDatetimeButton, IonModal, IonAccordion, IonAccordionGroup, IonHeader, NgFor, ReactiveFormsModule, FormsModule]
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
  selectedDate: any; // Declare a variable to store the selected date
  routeName: any;
  taskId: any;
  constructor(
    private taskService: TaskService,
    private toastr: ToastService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit() {
   
    this.routeName = this.router.url.split('/')[2]


    if (this.routeName === 'edit-task') {
      this.route.params.subscribe(async (res: any) => {
        this.taskId = await res['taskId']
        this.taskService.editTask(this.taskId).subscribe(async (taskData: any) => {
          const editTodo = taskData.result
          this.reactiveForm = new FormGroup({
            taskTitle: new FormControl(editTodo.taskTitle, [Validators.required]),
            taskCategory: new FormControl(editTodo.taskCategory, [Validators.required]),
            taskPriority: new FormControl(editTodo.taskPriority, [Validators.required]),
            taskDatetime: new FormControl(`${editTodo.taskDate}T${editTodo.taskTime}`, [Validators.required]),
            taskDescription: new FormControl(editTodo.taskDescription, [Validators.required]),
          });

        })


      })
    }

    this.reactiveForm = new FormGroup(
      this.taskFormtemplate
    )


  }



  async taskSubmitted() {
    if (this.reactiveForm.valid && this.reactiveForm.status == "VALID") {
      console.log(this.reactiveForm);
      if (this.routeName === 'edit-task') {
        this.reactiveForm.value.taskId = this.taskId
        console.log(this.reactiveForm.value);
        this.taskService.updateTask(this.reactiveForm.value).subscribe(async (res: any) => {

          if (res.status == "Task Updated") {
            this.toastr.success(res.status, "Task Update")
            this.router.navigate(['home/task/mananger/config'])
          }
        })
      } else {
        this.taskService.AddTaskFunction(this.reactiveForm.value).subscribe(async (res: any) => {
          this.reactiveForm.reset()
          if (res.status == "Task Created Successfully") {
            this.toastr.success(res.status, "Task")
            this.reactiveForm.reset()
          }
        })
      }

    } else {
      this.toastr.info(' Check the form before add', "Task")
    }

  }

}
