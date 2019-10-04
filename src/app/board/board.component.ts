import { Component, OnInit, ViewChild } from '@angular/core';
import { ChartType, ChartOptions, ChartColor } from 'chart.js';
import { Label, Colors } from 'ng2-charts';
import { Feature } from './../feature.motel';
import { Router } from '@angular/router';
import { Observable, merge} from 'rxjs'
import { AngularFirestore, AngularFirestoreCollection }  from '@angular/fire/firestore';
import * as pluginDataLabels from 'chartjs-plugin-datalabels';
import { Color } from 'chartjs-plugin-datalabels/types/options';
import { TouchSequence } from 'selenium-webdriver';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
   features: Feature[] = [];
   _features: Observable<Feature[]>;
   sortedFeatures: Feature[];
   public pieChartOptions: ChartOptions = {
      responsive: true,
      legend: {
        position: 'left',
        labels: { fontColor: '#FFF', fontSize: 18, fontFamily: 'Roboto, sans-serif', },
      },
      title: {
         fontFamily: 'Roboto, sans-serif',
         fontColor: '#ffffff',
         fontSize: 14
      },
      tooltips: {
         backgroundColor: '#333',
         titleFontFamily: 'Roboto, sans-serif',
         titleFontSize: 14,
         titleFontStyle: 'normal',
      },
      plugins: {
        datalabels: {
          formatter: (value, ctx) => {
            const label = ctx.chart.data.labels[ctx.dataIndex];
            return label;
          },
          font: {
             family: 'Roboto, sans-serif',
             size: 14,
             weight: 400
          },
          color: '#fff',
          backgroundColor: '#333',
          padding: 10
        },
      }
    };
    colors: string[] = [];
    labels: Label[] = [];
    data: number[] = [];
    public pieChartLabels: Label[] = [];
    public pieChartData: number[] = [];
    public pieChartType: ChartType = 'doughnut';
    public pieChartLegend = false;
    public pieChartPlugins = [pluginDataLabels];
    public pieChartColors: Colors[] = [];
  
  constructor(
     private afs: AngularFirestore
  ) {
   this.afs.collection("Features").valueChanges().subscribe(features => {
      this.features = JSON.parse(JSON.stringify(features))
      this.sortedFeatures = this.features.sort((a, b) => b.votes - a.votes)
   });
    this._features = this.afs.collection("Features").valueChanges()
   console.log(this._features)

   this.setupPieChart()
   }

  setupPieChart() {
   this.afs.collection("Features").valueChanges().subscribe(features => {
      this.features.forEach(feat => {
         this.colors.push(feat.color)
         this.labels.push(feat.title)
         this.data.push(feat.votes)
      })

      this.pieChartColors = [
         {
            backgroundColor: this.colors
         }
      ]
      this.pieChartLabels = this.labels;
      this.pieChartData = this.data;
    })
  }

  ngOnInit() {
  
   setTimeout(() => {
     // this.setupPieChart()
    // window.location.reload();
   }, 5000);
 
  }


  addVote(id, vote) {

   this.afs.collection("Features").doc<Feature>(`${id}`).set({
      votes: vote + 1
   }, { merge: true });

}


}
