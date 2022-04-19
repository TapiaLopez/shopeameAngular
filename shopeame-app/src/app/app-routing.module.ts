import { NavigatorComponent } from './core/navigator/navigator.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GestionComponent } from './gestion/gestion.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './productos/productos.component';
import { FooterComponent } from './core/footer/footer.component';

const routes: Routes = [
  {path: '', pathMatch: "full", component: HomeComponent},
  {path: 'productos', component: ProductComponent},
  {path: 'gestion', component: GestionComponent},
  {path: 'footer', component: FooterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
