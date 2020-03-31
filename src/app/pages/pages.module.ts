import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbLayoutModule, NbCardModule } from '@nebular/theme';

import { ComponentsModule } from '../components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ThemeModule } from '../theme/theme.module';
import { ServiceModule } from '../services/service.module';

@NgModule({
  declarations: [
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NbLayoutModule,
    ComponentsModule,
    ThemeModule.forRoot(),
    ServiceModule.forRoot(),
    NbCardModule,
  ],
  exports: [
    DashboardComponent
  ],
  providers: [],
})
export class PagesModule { }
