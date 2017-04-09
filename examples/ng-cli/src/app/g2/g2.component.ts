/**
 * Created by vadimdez on 27/03/2017.
 */
import { AfterViewInit, Component, EventEmitter, Input, Output } from '@angular/core';
import G2 from 'g2';

@Component({
  selector: 'g2',
  template: `<div [id]="chartId"></div>`
})

export class G2Component implements AfterViewInit {
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