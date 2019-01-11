import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { MoviesService } from './movies.service';
import { LoggerService } from './logger.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, HttpClientModule],
  providers: [MoviesService, LoggerService],
  bootstrap: [AppComponent],
})
export class AppModule {}
