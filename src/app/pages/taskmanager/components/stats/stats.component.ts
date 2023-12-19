import { NgFor } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { IonButton, IonCard, IonCardContent, IonContent, IonIcon, IonInput, IonItem, IonLabel, IonList } from '@ionic/angular/standalone';
import { FeatherIconsModule } from 'src/app/feather-icons/feather-icons.module';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  standalone: true,
  imports: [IonContent, IonList, NgFor, IonItem, IonIcon, IonButton, IonInput, FeatherIconsModule, IonLabel, IonCard, IonCardContent]
})
export class StatsComponent implements OnInit {
  @ViewChild('card') cardElement: ElementRef | undefined
  constructor(private renderer: Renderer2) { }
  categoryArray: any = []
  ngOnInit() {}
  addCategory(ev: any) {
    let inputResult = ev
    const randomColor = Math.floor(Math.random() * 16777215).toString(16)
    if (this.cardElement) {
      const para = this.renderer.createElement('p');
      this.renderer.setProperty(para, 'innerHTML', inputResult)
      this.renderer.addClass(para, 'categorys')
      this.renderer.setStyle(para, 'color', `#${randomColor}`)
      this.renderer.setStyle(para, 'font-weight', 400)
      this.renderer.setStyle(para, 'background-color', this.hexToRGBA(randomColor, 0.2))
      this.renderer.appendChild(this.cardElement.nativeElement, para);
    }

  }
  hexToRGBA(hex: string, alpha: number): string {
    const r = parseInt(hex.substring(1, 3), 16);
    const g = parseInt(hex.substring(3, 5), 16);
    const b = parseInt(hex.substring(5, 7), 16);
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  }

}
