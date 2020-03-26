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
  NbThemeModule,
} from '@nebular/theme';
import { NbSecurityModule, NbAccessChecker } from '@nebular/security';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NgxEchartsModule } from 'ngx-echarts';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { ChartModule } from 'angular2-chartjs';

import { HeaderComponent } from './header/header.component';
import { ChartjsBarComponent } from './charts/chartjs-bar.component';
import { EchartsAreaStackComponent } from './charts/echarts-area-stack.component';
import { ThemeModule } from '../theme/theme.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ChartjsBarComponent,
    EchartsAreaStackComponent,
  ],
  exports: [
    HeaderComponent,
    ChartjsBarComponent,
    EchartsAreaStackComponent,
  ],
  imports: [
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
    ThemeModule.forRoot(),
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