import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { PagesComponent } from '../pages/pages.component';
import { SettingsComponent } from '../settings/settings.component';
import { NewPageComponent } from '../new-page/new-page.component';
import { MediaComponent } from '../media/media.component';
import { PageComponent } from '../pages/new/page.component';

const routes: Routes = [
  { path : '', pathMatch: "full", redirectTo: "pages"},
  { path : 'pages',  component : PagesComponent },
  { path : 'pages/:id',  component : PageComponent  },
  { path : 'settings', component : SettingsComponent },
  { path : 'media', component : MediaComponent },
  { path : 'media/:id', component : MediaComponent },
  { path : '**', pathMatch : "full", redirectTo : "pages" }

  
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRouteModule { }
