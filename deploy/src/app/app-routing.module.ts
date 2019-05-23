import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaPruebaComponent } from './pagina-prueba/pagina-prueba.component';

const routes: Routes = [
  {path: '', component:AppComponent},
  {path: 'prueba', component:PaginaPruebaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
