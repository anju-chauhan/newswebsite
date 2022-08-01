import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {
  NbThemeModule, NbLayoutModule, NbSidebarModule, NbCardModule, NbCheckboxModule, NbToggleModule,
  NbFormFieldModule, NbSelectModule, NbListModule, NbIconModule, NbTabsetModule, NbActionsModule,
  NbDatepickerModule, NbInputModule, NbButtonModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { SomePageComponent } from './some-page/some-page.component';
import { SomePageModule} from './some-page/some-page.module';
import { AdminComponent } from './admin/admin.component';
import { AdminModule } from './admin/admin.module';


@NgModule({
  declarations: [
    AppComponent,
    SomePageComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule,
    NbThemeModule.forRoot({name: 'default'}),
    NbLayoutModule,
    NbEvaIconsModule,
    NbSidebarModule,
    NbCardModule,
    NbFormFieldModule,
    NbSelectModule,
    SomePageModule,
    NbListModule,
    NbCheckboxModule,
    NbToggleModule,
    NbIconModule,
    NbTabsetModule,
    NbActionsModule,
    AdminModule,
    FormsModule,
    NbDatepickerModule.forRoot(),
    NbInputModule,
    NbButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
