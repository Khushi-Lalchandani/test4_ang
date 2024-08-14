import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { HttpClientModule } from '@angular/common/http';
import { APIService } from './api.service';

@NgModule({
  declarations: [AppComponent, TableComponent],
  imports: [BrowserModule, HttpClientModule, FormsModule],
  providers: [APIService],
  bootstrap: [AppComponent],
})
export class AppModule {}
