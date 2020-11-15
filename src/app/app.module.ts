import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InputDebounceTrimComponent } from './components/input-debounce-trim/input-debounce-trim.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputComponent } from './components/input/input.component';
import { InputTrimComponent } from './components/input-trim/input-trim.component';

@NgModule({
  declarations: [
    AppComponent,
    InputDebounceTrimComponent,
    InputComponent,
    InputTrimComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
