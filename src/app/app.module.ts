import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA} from '@angular/core';

import { AppComponent } from './app.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, AgGridModule.withComponents([])
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
		CUSTOM_ELEMENTS_SCHEMA,
		NO_ERRORS_SCHEMA
	]
})
export class AppModule { }
