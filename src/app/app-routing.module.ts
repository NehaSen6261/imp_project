import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SteperFormComponent } from './steper-form/steper-form.component';
import { AgmMapComponent } from './agm-map/agm-map.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { ResizableDragComponent } from './resizable-drag/resizable-drag.component';
import { DatepickerrangeComponent } from './datepickerrange/datepickerrange.component';
import { ConMessageComponent } from '../app/con-message/con-message.component';
import { ButtonAddComponent } from './button-add/button-add.component';
import { CardChartComponent } from './card-chart/card-chart.component';
import { FormDataComponent } from './form-data/form-data.component';
import { DragDropComponent } from './drag-drop/drag-drop.component';

const routes: Routes = [
  { path: 'steper-form', component: SteperFormComponent },
  { path: 'agm-map', component: AgmMapComponent },
  { path: 'apex-chart', component: ApexChartComponent },
  
  { path: 'datepickerrange', component: DatepickerrangeComponent },
  { path: 'aboutus', component: ConMessageComponent },
  { path: 'button-add', component: ButtonAddComponent },
  { path: 'form-data', component: FormDataComponent },
  { path: 'card-chart', component: CardChartComponent },
  { path: 'drag-drop', component: DragDropComponent },
  { path: 'add-table', component: ResizableDragComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
