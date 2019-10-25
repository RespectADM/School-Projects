import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { GetRequestComponent } from './fetch.component';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent, GetRequestComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
