import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { AngularFireModule } from 'angularfire2';

import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { NavbarComponent } from './shared/navbar/navbar/navbar.component';
import { FooterComponent } from './shared/footer/footer.component';
import { LeftbarComponent } from './shared/leftbar/leftbar.component';

import { AuthService } from './shared/auth.service';
import { MenuService } from './shared/menu.service';
import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { DataService } from './shared/data.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NewPageComponent } from './new-page/new-page.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LeftbarComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    NewPageComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    FormsModule,
    AlertModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [
    AuthService,
    MenuService,
    DataService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor()
  {
      
  }

}
