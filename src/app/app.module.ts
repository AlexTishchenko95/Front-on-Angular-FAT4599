import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ShowFileListComponent } from './show-file-list/show-file-list.component';
import { CreateFileComponent } from './create-file/create-file.component';
import { DeleteFileComponent } from './delete-file/delete-file.component';
import { UpgradeFileComponent } from './upgrade-file/upgrade-file.component';
import * as innerTextComponent from './inner-text/inner-text.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ShowFileListComponent,
    CreateFileComponent,
    DeleteFileComponent,
    UpgradeFileComponent,
    innerTextComponent.InnerTextComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
