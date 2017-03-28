# G2 Component for Angular >= 2

### Install

```
npm install ngx-g2 -save
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
Then use it in html

```html
<g2 [data]="data" 
    [width]="width"
    [height]="height"
    [plotCfg]="plotCfg"
    [forceFit]="forceFit"
></g2>
```

## License

[MIT](https://tldrlegal.com/license/mit-license) © [Vadym Yatsyuk](https://github.com/vadimdez)
