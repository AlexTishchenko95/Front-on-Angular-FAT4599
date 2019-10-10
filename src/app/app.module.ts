import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFileListModule } from './show-file-list/show-file-list.module';
import { CreateFileModule } from './create-file/create-file.module';
import { DeleteFileModule } from './delete-file/delete-file.module';
import { UpgradeFileModule } from './upgrade-file/upgrade-file.module';
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
    CreateFileModule,
    DeleteFileModule,
    UpgradeFileModule,
    HeaderModule,
    DialogAcceptModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
