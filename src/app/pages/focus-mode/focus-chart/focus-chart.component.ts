import { HttpClientModule } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Chart, registerables } from 'chart.js';
import { JsonserviceService } from 'src/app/services/jsonservice.service';
Chart.register(...registerables);

@Component({
  selector: 'app-focus-chart',
  templateUrl: './focus-chart.component.html',
  styleUrls: ['./focus-chart.component.scss'],
  standalone: true,
  imports: [],
  providers: [JsonserviceService]
})
export class FocusChartComponent implements OnInit {
  chart: any = [];
  @ViewChild('canvas') myCircle!: ElementRef<SVGCircleElement>;
  data: any = [7, 5, 3];
  color: any = ["red", "blue", "green"];
  label: any = ['Monday', 'tuesday', 'wdnesday'];
  constructor(private json: JsonserviceService) { }

  async ngOnInit() {

    this.chart = new Chart('canvas', {
      type: 'polarArea',
      data: {
        labels: this.label,
        datasets: [{
          label: 'Weekly Focus Time',
          data: this.data,
          backgroundColor: this.color,
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {


        layout: {
          padding: {
            left: 0,
            right: 0,
            top: 0,
            bottom: 0
          }
        }, animation: {
          duration: 0 // general animation time
        },
        onClick: function (event, elements) {
          if (elements && elements.length > 0) {

            // const clickedDatasetIndex = elements[0]._datasetIndex;
            let clickedElementIndex = elements[0].element.options;
            clickedElementIndex['backgroundColor'] = '#E26255'

            // const clickedData = this.chart.data.datasets[clickedDatasetIndex].data[clickedElementIndex];
            // console.log(elements[0].index);
            // const newColor = 'rgba(75, 192, 192)'; // Change this to your desired color
            // this.chart.data.datasets[clickedDatasetIndex].backgroundColor[clickedElementIndex] = newColor;
            // this.chart.update(); // Update the chart to reflect the color change
          }
        }

      }
    });

  }


}
