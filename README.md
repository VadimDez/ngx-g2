# G2 Component for Angular >= 2

<img width="500" src="https://cloud.githubusercontent.com/assets/3748453/24840899/3a926fbe-1d77-11e7-910f-a9673cb754fa.png"/>

#### [Demo](https://vadimdez.github.io/ngx-g2/)

### Install

```
npm install ngx-g2 --save
```

### Usage

Import `G2Module` to your Module

```ts
import { G2Module } from 'ngx-g2';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    G2Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Your component
```ts
export class AppComponent {
  data: any = [
    {genre: 'Sports', sold: 275},
    {genre: 'Strategy', sold: 115},
    {genre: 'Action', sold: 120},
    {genre: 'Shooter', sold: 350},
    {genre: 'Other', sold: 150},
  ];
  
  width: number = 700;
  height: number = 400;

  configure(chart: any) {
    chart.interval().position('genre*sold').color('genre');
  }
}
```
Then use it in html

```html
<g2 [data]="data" 
    [width]="width"
    [height]="height"
    (configure)="configure($event)"
></g2>
```

### Attributes

| Name | Type | Description |
| --- | --- | --- |
| [data] | Array | chart data |
| [titles]| Object | chart titles |
| [width]| number | chart width |
| [height]| number | chart height |
| [plotCfg]| Object | chart config |
| [forceFit]| boolean | fit width to parent element |
| (configure)| Function | callback to configure chart |


#### G2 Docs
[See g2 docs](http://g2.alipay.com/)

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
