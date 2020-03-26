import {ModuleWithProviders, NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbActionsModule,
  NbLayoutModule,
  NbMenuModule,
  NbSearchModule,
  NbSidebarModule,
  NbUserModule,
  NbContextMenuModule,
  NbButtonModule,
  NbSelectModule,
  NbIconModule,
  NbSidebarService,
  NbMediaBreakpointsService,
  NbMenuService,
  NbThemeService,
  NbColorHelper,
  NbCardModule,
  NbTabsetModule,
  NbRadioModule,
  NbListModule,
} from '@nebular/theme';
import { NbSecurityModule, NbAccessChecker } from '@nebular/security';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { EchartsAreaStackComponent } from './charts/echarts-area-stack.component';
import { ThemeModule } from '../theme/theme.module';
import { TemperatureComponent } from './temperature/temperature.component';
import { TemperatureDraggerComponent } from './temperature/temperature-dragger/temperature-dragger.component';
import { CoreModule } from '../@core/core.module';
import { EchartsLineComponent } from './charts/echarts-line.component';
import { ECommerceUserActivityComponent } from './user-activity/user-activity.component';
import { EchartsBarComponent } from './charts/echarts-bar.component';

@NgModule({
  declarations: [
    HeaderComponent,
    EchartsBarComponent,
    EchartsAreaStackComponent,
    TemperatureDraggerComponent,
    TemperatureComponent,
    EchartsLineComponent,
    ECommerceUserActivityComponent,
  ],
  exports: [
    HeaderComponent,
    EchartsBarComponent,
    EchartsAreaStackComponent,
    TemperatureDraggerComponent,
    TemperatureComponent,
    EchartsLineComponent,
    ECommerceUserActivityComponent,
  ],
  imports: [
    ThemeModule.forRoot(),
    BrowserModule,
    BrowserAnimationsModule,
    CommonModule,
    NbLayoutModule,
    NbMenuModule,
    NbUserModule,
    NbActionsModule,
    NbSearchModule,
    NbSidebarModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSelectModule,
    NbIconModule,
    NbEvaIconsModule,
    NbSecurityModule,
    ChartModule,
    NgxEchartsModule,
    NbCardModule,
    NbTabsetModule,
    NbRadioModule,
    FormsModule,
    CoreModule,
    NbListModule
  ],
  providers: [
    NbSidebarService,
    NbMediaBreakpointsService,
    NbMenuService,
    NbThemeService,
    NbAccessChecker,
    NbColorHelper,
    NgxEchartsModule,
    NgxChartsModule,
    ChartModule,
    NbCardModule,
  ],
})
export class ComponentsModule { }
