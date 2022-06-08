import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StartComponent } from './start/start.component';
import { MatIconModule } from '@angular/material/icon';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ServiceComponent } from './service/service.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [StartComponent, AppComponent, AboutusComponent, ServiceComponent, ContactComponent],
  imports: [BrowserModule, BrowserAnimationsModule, MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
