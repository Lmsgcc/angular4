
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";

import { environment } from '../environments/environment';

import { PagesComponent } from './pages/pages.component';
import { MediaComponent } from './media/media.component';
import { SettingsComponent } from './settings/settings.component';
import { PageComponent } from './pages/new/page.component';
import { NotFoundComponent } from './shared/notfound/notfound.component';
import { AuthGuard } from './shared/auth.guard';


const routes: Routes = [
	{ path: '', pathMatch: 'full', redirectTo: 'pages' },
  { path: 'pages', component: PagesComponent, canActivate: [AuthGuard] },
  { path: 'pages/:id', component: PageComponent, canActivate: [AuthGuard] },
  { path: 'media', component: MediaComponent, canActivate: [AuthGuard] },
  { path: 'media/:id', component: PageComponent, canActivate: [AuthGuard] },
  { path: 'settings', component: SettingsComponent, canActivate: [AuthGuard] },
	{ path: '**', pathMatch: 'full', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
