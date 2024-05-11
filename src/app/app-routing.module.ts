import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { MainPageComponent } from './main-page/main-page.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ChurchxelaComponent } from './churchxela/churchxela.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' }, //default route
  { path: 'main', component: AppComponent },
  { path:'Gallery', component:GalleryComponent  },
  { path:'churchxela', component:ChurchxelaComponent},
  { path: '**', component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
