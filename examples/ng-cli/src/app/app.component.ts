import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data: any = [
    {genre: 'Sports', sold: 275},
    {genre: 'Strategy', sold: 115},
    {genre: 'Action', sold: 120},
    {genre: 'Shooter', sold: 350},
    {genre: 'Other', sold: 150},
  ];
  titles = {
    genre: {
      alias: 'Title 游戏种类'
    },
    sold: {
      alias: 'Title 销售量'
    }
  };

  width: number = 700;
  height: number = 400;
  plotCfg: any = {
    margin: [10, 100, 50, 120],
  };
  forceFit: boolean = true;

  configure(chart: any) {
    chart.interval().position('genre*sold').color('genre');
  }
}