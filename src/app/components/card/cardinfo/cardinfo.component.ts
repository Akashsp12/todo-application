import { NgFor, NgIf } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel } from '@ionic/angular/standalone';
import { FeatherComponent } from 'angular-feather';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';
import { TaskService } from 'src/app/service/tasks/task.service';
import { ToastService } from 'src/app/service/toast/toast.service';

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
  constructor(private router: Router,
    private taskService: TaskService,
    private toastr: ToastService) { }

  a = [1, 2]
  async ngOnInit() {
    await console.log(this.taskconfig)

  }
  editTodo(id: any) {
    this.router.navigate(['home/edit-task/' + id])
  }


  CompletedTodo(id: any) {
    this.taskService.updateStatusForTodo(id).subscribe(async (res: any) => {
      if (res.status) {
        this.toastr.success(res.status, "Task Status")
        this.ngOnInit()
      }
    })

  }
  deleteOneTODO(id: any) {
    this.taskService.removeTodo(id).subscribe(async (res: any) => {
      if (res.status) {
        this.toastr.success(res.status, "Task Removed")
        this.ngOnInit()
      }
    })

  }



}
