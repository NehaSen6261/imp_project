import { Component, OnInit, ViewChild } from '@angular/core';

import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexFill,
  ApexTooltip,
  ApexXAxis,
  ApexLegend,
  ApexDataLabels,
  ApexTitleSubtitle,
  ApexPlotOptions,
  ApexYAxis
} from "ng-apexcharts";

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  xaxis: ApexXAxis;
  markers: any; //ApexMarkers;
  stroke: any; //ApexStroke;
  yaxis: ApexYAxis | ApexYAxis[];
  plotOptions: ApexPlotOptions;
  dataLabels: ApexDataLabels;
  colors: string[];
  labels: string[] | number[];
  title: ApexTitleSubtitle;
  subtitle: ApexTitleSubtitle;
  legend: ApexLegend;
  fill: ApexFill;
  tooltip: ApexTooltip;
};

declare global {
  interface Window {
    Apex: any;
  }
}

const sparkLineData = [24, 56, 47, 31, 65, 45, 38, 54, 37, 39, 24, 56, 47, 31, 65, 45]

@Component({
  selector: 'app-apex-chart',
  templateUrl: './apex-chart.component.html',
  styleUrls: ['./apex-chart.component.css']
})
export class ApexChartComponent implements OnInit {

  @ViewChild("chart") chart: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public chartAreaSparkline1Options: Partial<ChartOptions>;
  public chartAreaSparkline2Options: Partial<ChartOptions>;
  public chartAreaSparkline3Options: Partial<ChartOptions>;
  public chartLineSparkline1Options: Partial<ChartOptions>;
  public chartLineSparkline2Options: Partial<ChartOptions>;
  public chartLineSparkline3Options: Partial<ChartOptions>;
  public chartLineSparkline4Options: Partial<ChartOptions>;
  public chartBarSparkline1Options: Partial<ChartOptions>;
  public chartBarSparkline2Options: Partial<ChartOptions>;
  public chartBarSparkline3Options: Partial<ChartOptions>;
  public chartBarSparkline4Options: Partial<ChartOptions>;
  public commonAreaSparlineOptions: Partial<ChartOptions> = {
    chart: {
      type: "area",
      height: 160,
      sparkline: {
        enabled: true
      }
    },
    stroke: {
      curve: "straight"
    },
    fill: {
      opacity: 0.3
    },
    yaxis: {
      min: 0
    }
  };
  public commonLineSparklineOptions: Partial<ChartOptions> = {
    chart: {
      type: "line",
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function(seriesName) {
            return "";
          }
        }
      },
      marker: {
        show: false
      }
    }
  };
  public commonBarSparklineOptions: Partial<ChartOptions> = {
    chart: {
      type: "bar",
      width: 100,
      height: 35,
      sparkline: {
        enabled: true
      }
    },
    plotOptions: {
      bar: {
        columnWidth: "80%"
      }
    },
    tooltip: {
      fixed: {
        enabled: false
      },
      x: {
        show: false
      },
      y: {
        title: {
          formatter: function(seriesName) {
            return "";
          }
        }
      },
      marker: {
        show: false
      }
    }
  };

  constructor() {
    // setting global apex options which are applied on all charts on the page
    window.Apex = {
      stroke: {
        width: 3
      },
      markers: {
        size: 0
      },
      // tooltip: {
      //   x: {
      //           format: 'dd/MM/yy HH:mm'
      //         }
      // },
      //   xaxis: {
      //   type: 'datetime',
      //   categories: [
      //     '2018-09-19T00:00:00.000Z',
      //     '2018-09-19T01:30:00.000Z',
      //     '2018-09-19T02:30:00.000Z',
      //     '2018-09-19T03:30:00.000Z',
      //     '2018-09-19T04:30:00.000Z',
      //     '2018-09-19T05:30:00.000Z',
      //     '2018-09-19T06:30:00.000Z'
      //   ]
      // },
    //   tooltip: {
    //     x: {
    //       format: 'dd/MM/yy HH:mm'
    //     }
    //   }
    // };
    };

    this.chartAreaSparkline1Options = {
      series: [
        {
          name: "chart-big-sparkline",
          data: this.randomizeArray(sparkLineData)
        }
      ],
      colors: ["#DCE6EC"],
      title: {
        text: "$424,652",
        offsetX: 0,
        style: {
          fontSize: "24px"
        }
      },
      subtitle: {
        text: "Sales",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };

    this.chartAreaSparkline2Options = {
      series: [
        {
          name: "chart-big-sparkline",
          data: this.randomizeArray(sparkLineData)
        }
      ],
      colors: ["#DCE6EC"],
      title: {
        text: "$235,312",
        offsetX: 0,
        style: {
          fontSize: "24px"
        }
      },
      subtitle: {
        text: "Expenses",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };

    this.chartAreaSparkline3Options = {
      series: [
        {
          name: "chart-big-sparkline",
          data: this.randomizeArray(sparkLineData)
        }
      ],
      title: {
        text: "$135,965",
        offsetX: 0,
        style: {
          fontSize: "24px"
        }
      },
      subtitle: {
        text: "Profits",
        offsetX: 0,
        style: {
          fontSize: "14px"
        }
      }
    };

    this.chartLineSparkline1Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline2Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline3Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartLineSparkline4Options = {
      series: [
        {
          name: "chart-line-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartBarSparkline1Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartBarSparkline2Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartBarSparkline3Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };

    this.chartBarSparkline4Options = {
      series: [
        {
          name: "chart-bar-sparkline",
          data: this.randomizeArray(sparkLineData.slice(0, 10))
        }
      ]
    };
  }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  public randomizeArray(arg): number[] {
    var array = arg.slice();
    var currentIndex = array.length
     let temporaryValue,
      randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    console.log(array)

    return array;
  }
}