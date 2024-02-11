import { NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList ,IonChip} from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';
import { StatsinfoComponent } from './statsinfo/statsinfo.component';
import { TaskService } from 'src/app/service/tasks/task.service';
import { FormsModule } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  standalone: true,
  imports: [IonContent, IonChip,IonList,IonIcon ,NgFor, IonItem, IonIcon, IonButton, IonInput, FeatherIconsModule, IonLabel, IonCard, IonCardContent, StatsinfoComponent,FormsModule],
  providers: [TaskService]
})
export class StatsComponent implements OnInit {
  @ViewChild('card') cardElement!: ElementRef | undefined
  categoryList: any;
  constructor(private renderer: Renderer2, private taskService: TaskService,private toastr:ToastrService) { }
  categoryArray: any = []
  Category:any
  ngOnInit() {
  }

  ionViewWillEnter() {
    this.getAllCategory()
  }
  addCategory() {

    const data = {
      categoryName: this.Category
    }
    if ((this.Category != '' && this.Category != undefined) && this.Category != null) {
      this.taskService.postCategory(data).subscribe(async (res: any) => {
        if(res.status==='Category Added'){
          this.toastr.success(res.status, "Category")
        }else{
          this.toastr.info(res.status, "Category")
        }
     
      
        this.getAllCategory()
        this.Category=null
      })
    }


  }
  hexToRGBA(hex: string, alpha: number): string {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }


  getAllCategory() {
    this.taskService.getallCategory().subscribe(async (res: any) => {
     this.categoryList=res.result

    })

  }


}
