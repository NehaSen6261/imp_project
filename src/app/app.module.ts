import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgApexchartsModule } from 'ng-apexcharts';
import { DragDropComponent } from './drag-drop/drag-drop.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MarkdownModule } from 'ngx-markdown';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonAddComponent } from './button-add/button-add.component';
import { CardChartComponent } from './card-chart/card-chart.component';
import { FormDataComponent } from './form-data/form-data.component';
import { ValidationService } from './validation.service';
import { ConMessageComponent } from '../app/con-message/con-message.component';
import { AngularMatModule } from './angular-mat/angular-mat.module';
import { AngularResizedEventModule } from 'angular-resize-event';
import {MatCardModule} from '@angular/material/card';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import {FormsModule} from '@angular/forms';
import { ResizableDragComponent } from './resizable-drag/resizable-drag.component';
import { DatepickerrangeComponent } from './datepickerrange/datepickerrange.component';
import { DatepipeExmPipe } from './datepipe-exm.pipe';
import { AgmMapComponent } from './agm-map/agm-map.component';
import { ApexChartComponent } from './apex-chart/apex-chart.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SteperFormComponent } from './steper-form/steper-form.component';
import { DisabledDirective } from './disabled.directive';
// import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    AgmMapComponent,
    DragDropComponent,
    ButtonAddComponent,
    CardChartComponent,
    FormDataComponent,
    ConMessageComponent,
   ResizableDragComponent,
   DatepickerrangeComponent,
   DatepipeExmPipe,
   ApexChartComponent,
   SteperFormComponent,
   DisabledDirective,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgApexchartsModule,
    BrowserAnimationsModule,
    DragDropModule,
    MarkdownModule.forRoot(),
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    AngularMatModule,
    AngularResizedEventModule,
    MatCardModule,
    NgbModule,
//   AgmCoreModule.forRoot({
//  apiKey: 'AIzaSyAvcDy5ZYc2ujCS6TTtI3RYX5QmuoV8Ffw'
// })
  ],
  providers: [ValidationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
