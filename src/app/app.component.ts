import { Component } from '@angular/core';
import { SeriesLabelsContentArgs } from '@progress/kendo-angular-charts';
import { internetGrowthData, mockData, InetData } from './internet-growth-data';

@Component({
    selector: 'my-app',
    template: `
      <kendo-chart>
        <kendo-chart-title text="Share of Internet Population Growth"></kendo-chart-title>
        <kendo-chart-legend [visible]="false"></kendo-chart-legend>
        <kendo-chart-area background="none"></kendo-chart-area>
        <kendo-chart-tooltip>
          <ng-template kendoChartSeriesTooltipTemplate
            let-value="value" 
            let-category="category" 
            let-series="series">
            <span>{{ category }}</span>
          </ng-template>
        </kendo-chart-tooltip>
        <kendo-chart-series>
          <kendo-chart-series-item *ngFor="let series of model2; let outermost = last;"
              type="donut" 
              [startAngle]="150"
              [name]="series.name" 
              [data]="series.data"
              [size]="50"
              [holeSize]="20"
              field="sliceWidth" 
              categoryField="category" 
              colorField="color">
            <kendo-chart-series-item-labels *ngIf="outermost"
                                            position="outsideEnd" background="none"
                                            [content]="labelContent">
            </kendo-chart-series-item-labels>
          </kendo-chart-series-item>
        </kendo-chart-series>
      </kendo-chart>
    `
})
export class AppComponent {
    public model: InetData[] = internetGrowthData;
    public model2: InetData[] = mockData;

    public labelContent(e: SeriesLabelsContentArgs): string {
        console.log(e)
        if (e.series.type === 'donut') {
          return `${ e.category }: \n ${e.dataItem.value}%`;
        }
    }
}
