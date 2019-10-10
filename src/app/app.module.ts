import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFileListModule } from './show-file-list/show-file-list.module';
import { HeaderModule } from './header/header.module';
import { DialogAcceptModule } from './dialog-accept/dialog-accept.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    ShowFileListModule,
    HeaderModule,
    DialogAcceptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
