import { Component, ViewChild } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexStroke,
  ApexGrid,
ApexMarkers,
  ApexYAxis,
   ApexLegend,
   ApexTooltip,
   ApexNonAxisChartSeries,
   ApexResponsive,
   ApexFill
} from 'ng-apexcharts';


export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  dataLabels: ApexDataLabels;
  grid: ApexGrid;
  stroke: ApexStroke;
  title: ApexTitleSubtitle;
};

export type ChartOptions_1 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  dataLabels: ApexDataLabels;
  markers: ApexMarkers;
  colors: string[];
  yaxis: ApexYAxis;
  grid: ApexGrid;
  legend: ApexLegend;
  title: ApexTitleSubtitle;
};
export type chartOptions_2 = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  stroke: ApexStroke;
  tooltip: ApexTooltip;
  dataLabels: ApexDataLabels;
};

export type ChartOptions_3 = {
  series: ApexNonAxisChartSeries;
  chart: ApexChart;
  responsive: ApexResponsive[];
  labels: any;
};

import { dataSeries } from './data-series';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _router: Router) {

  
    this.initChartData();
    // this.chartOptions = {
    //   series: [
    //     {
    //       name: 'Desktops',
    //       data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: 'line',
    //     zoom: {
    //       enabled: false
    //     },
    //     toolbar: {
    //       show: false
    //       }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     curve: 'straight'
    //   },
    //   title: {
    //     text: 'Product Trends by Month',
    //     align: 'left'
    //   },
    //   grid: {
    //     row: {
    //       colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //       opacity: 0.5
    //     }
    //   },
    //   xaxis: {
    //     categories: [
    //       'Jan',
    //       'Feb',
    //       'Mar',
    //       'Apr',
    //       'May',
    //       'Jun',
    //       'Jul',
    //       'Aug',
    //       'Sep'
    //     ]
    //   }
    // };

    // this.chartOptions_1 = {
    //   series: [
    //     {
    //       name: 'High - 2013',
    //       data: [28, 29, 33, 36, 32, 32, 33]
    //     },
    //     {
    //       name: 'Low - 2013',
    //       data: [12, 11, 14, 18, 17, 13, 13]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: 'line',
    //     dropShadow: {
    //       enabled: true,
    //       color: '#000',
    //       top: 18,
    //       left: 7,
    //       blur: 10,
    //       opacity: 0.2
    //     },
    //     toolbar: {
    //       show: false
    //     }
    //   },
    //   colors: ['#77B6EA', '#545454'],
    //   dataLabels: {
    //     enabled: true
    //   },
    //   stroke: {
    //     curve: 'smooth'
    //   },
    //   title: {
    //     text: 'Average High & Low Temperature',
    //     align: 'left'
    //   },
    //   grid: {
    //     borderColor: '#e7e7e7',
    //     row: {
    //       colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
    //       opacity: 0.5
    //     }
    //   },
    //   markers: {
    //     size: 1
    //   },
    //   xaxis: {
    //     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
    //     title: {
    //       text: 'Month'
    //     }
    //   },
    //   yaxis: {
    //     title: {
    //       text: 'Temperature'
    //     },
    //     min: 5,
    //     max: 40
    //   },
    //   legend: {
    //     position: 'top',
    //     horizontalAlign: 'right',
    //     floating: true,
    //     offsetY: -25,
    //     offsetX: -5
    //   }
    // };

    // this.chartOptions_2 = {
    //   series: [
    //     {
    //       name: 'series1',
    //       data: [31, 40, 28, 51, 42, 109, 100]
    //     },
    //     {
    //       name: 'series2',
    //       data: [11, 32, 45, 32, 34, 52, 41]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: 'area',
    //     toolbar: {
    //       show: false
    //     }
    //   },
    //   dataLabels: {
    //     enabled: false
    //   },
    //   stroke: {
    //     curve: 'smooth'
    //   },
    //   xaxis: {
    //     type: 'datetime',
    //     categories: [
    //       '2018-09-19T00:00:00.000Z',
    //       '2018-09-19T01:30:00.000Z',
    //       '2018-09-19T02:30:00.000Z',
    //       '2018-09-19T03:30:00.000Z',
    //       '2018-09-19T04:30:00.000Z',
    //       '2018-09-19T05:30:00.000Z',
    //       '2018-09-19T06:30:00.000Z'
    //     ]
    //   },
    //   tooltip: {
    //     x: {
    //       format: 'dd/MM/yy HH:mm'
    //     }
    //   }
    // };
    // this.chartOptions_3 = {
    //   series: [44, 55, 13, 43, 22],
    //   chart: {
    //     width: 380,
    //     type: 'pie'
    //   },
    //   labels: ['Team A', 'Team B', 'Team C', 'Team D', 'Team E'],
    //   responsive: [
    //     {
    //       breakpoint: 480,
    //       options: {
    //         chart: {
    //           width: 200
    //         },
    //         legend: {
    //           position: 'bottom'
    //         }
    //       }
    //     }
    //   ]
    // };
  }

  gotocontactus() {
    // this._router.navigate(['contactus']);
    this._router.navigate(['contactus',500]);
  }

  public series: ApexAxisChartSeries;
  public chart: ApexChart;
  public dataLabels: ApexDataLabels;
  public markers: ApexMarkers;
  public title: ApexTitleSubtitle;
  public fill: ApexFill;
  public yaxis: ApexYAxis;
  public xaxis: ApexXAxis;
  public tooltip: ApexTooltip;
  // @ViewChild('chart') chart: ChartComponent;


  public chartOptions: Partial<ChartOptions>;
  // tslint:disable-next-line:variable-name
  public chartOptions_1: Partial<ChartOptions>;

  // tslint:disable-next-line:variable-name
  public chartOptions_2: Partial<ChartOptions>;

  // tslint:disable-next-line:variable-name
  public chartOptions_3: Partial<ChartOptions>;


  movies = [
    'Episode I - The Phantom Menace',
    'Episode II - Attack of the Clones',
    'Episode III - Revenge of the Sith',
    'Episode IV - A New Hope',
    'Episode V - The Empire Strikes Back',
    'Episode VI - Return of the Jedi',
    'Episode VII - The Force Awakens',
    'Episode VIII - The Last Jedi',
    'Episode IX – The Rise of Skywalker'
  ];

  // tslint:disable-next-line:typedef
  // public generateData(baseval, count, yrange) {
  //   let i = 0;
  //   let series = [];
  //   while (i < count) {
  //     let x = Math.floor(Math.random() * (750 - 1 + 1)) + 1;
  //     let y =
  //       Math.floor(Math.random() * (yrange.max - yrange.min + 1)) + yrange.min;
  //     let z = Math.floor(Math.random() * (75 - 15 + 1)) + 15;

  //     series.push([x, y, z]);
  //     baseval += 86400000;
  //     i++;
  //   }
  //   return series;
  // }



  public initChartData(): void {
    let ts2 = 1484418600000;
    const dates = [];
    for (let i = 0; i < 3; i++) {
      ts2 = ts2 + 86400000;
      dates.push([ts2, dataSeries[1][i].value]);
      // console.log(  dataSeries[1][i].value);
    }
    console.log(dates);

    this.series = [
      {
        name: 'XYZ MOTORS',
        data: dates,

      }
    ];
    this.chart = {
      type: 'area',
      stacked: false,
      height: 350,
      zoom: {
        type: 'x',
        enabled: true,
        autoScaleYaxis: true
      },
      toolbar: {
        autoSelected: 'zoom'
      }
    };
    this.dataLabels = {
      enabled: false
    };
    this.markers = {
      size: 0
    };
    this.title = {
      text: 'Stock Price Movement',
      align: 'left'
    };
    this.fill = {
      type: 'gradient',
      gradient: {
        shadeIntensity: 1,
        inverseColors: false,
        opacityFrom: 0.5,
        opacityTo: 0,
        stops: [0, 90, 100]
      }
    };
    this.yaxis = {
      labels: {
        // tslint:disable-next-line:typedef
        formatter(val) {
          return (val / 1000000).toFixed(0);
        }
      },
      title: {
        text: 'Price'
      }
    };
    this.xaxis = {
      type: 'datetime',

    };
   // tslint:disable-next-line:no-trailing-whitespace
   
    this.tooltip = {
      shared: false,
      // y: {
      //   // tslint:disable-next-line:typedef
      //   // formatter(val) {
      //   //   return (val / 1000000).toFixed(0);
      //   // }
      //   // tslint:disable-next-line:typedef
      //   // tslint:disable-next-line:only-arrow-functions
      //   // tslint:disable-next-line:typedef
      //   formatter: function ( valtimestamp: any) {
      //     return new Date(timestamp) // The formatter function overrides format property
      //   }
      // }
      x: {
        format: ('MMM d, y, H:mm')
     }
    };
  }

  // tslint:disable-next-line:member-ordering


}
