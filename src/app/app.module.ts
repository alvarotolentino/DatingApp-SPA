import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ValueComponent } from './value/value.component';
import { HttpModule } from '@angular/http';
import { NavComponent } from './nav/nav.component';
import { AuthService } from './_service/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    ValueComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
