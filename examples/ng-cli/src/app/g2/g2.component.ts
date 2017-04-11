/**
 * Created by vadimdez on 27/03/2017.
 */
import { AfterViewInit, Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import G2 from 'g2';

@Component({
  selector: 'g2',
  template: `<div [id]="chartId"></div>`
})

export class G2Component implements AfterViewInit, OnChanges {
  @Input() data: any;
  @Input() titles: any;
  @Input() width: number = 600;
  @Input() height: number = 300;
  @Input() plotCfg: any = {};
  @Input() forceFit: boolean = false;
  @Output() configure = new EventEmitter();

  chart: any = null;
  chartId: string = `ngx-g2-${ (new Date()).getTime() }`;

  ngAfterViewInit() {
    this.initChart();
  }

  /**
   * On updates
   * @param changes
   */
  ngOnChanges(changes: SimpleChanges) {
    if (!this.chart) {
      return;
    }

    if ('forceFit' in changes) {
      if (this.forceFit) {
        this.chart.forceFit();
      } else {
        this.chart.changeSize(this.width, this.height);
      }
    }

    if ('width' in changes || 'height' in changes) {
      this.chart.changeSize(this.width, this.height);
    }

    if ('data' in changes) {
      this.chart.changeData(this.data)
    }
  }

  /**
   * Initialize chart with data
   */
  initChart() {
    this.chart = new G2.Chart({
      id: this.chartId,
      width: this.width,
      height: this.height,
      plotCfg: this.plotCfg,
      forceFit: this.forceFit
    });

    this.chart.source(this.data, this.titles);

    this.configure.emit(this.chart);

    this.chart.render();
  }
}