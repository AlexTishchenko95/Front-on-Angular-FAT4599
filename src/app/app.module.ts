import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ShowFileListModule } from './show-file-list/show-file-list.module';
import { CreateFileModule } from './create-file/create-file.module';
import { DeleteFileModule } from './delete-file/delete-file.module';
import { UpgradeFileModule } from './upgrade-file/upgrade-file.module';
import { HeaderModule } from './header/header.module';
import { InnerTextModule } from './inner-text/inner-text.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ShowFileListModule,
    CreateFileModule,
    DeleteFileModule,
    UpgradeFileModule,
    HeaderModule,
    InnerTextModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
