import { NgModule } from '@angular/core';
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
} from '@nebular/theme';
import { NbSecurityModule, NbAccessChecker } from '@nebular/security';
import { NbEvaIconsModule } from '@nebular/eva-icons';

import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    HeaderComponent,
  ],
  exports: [
    HeaderComponent,
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
  ],
  providers: [
    NbSidebarService,
    NbMediaBreakpointsService,
    NbMenuService,
    NbThemeService,
    NbAccessChecker,
  ],
})
export class ComponentsModule { }
