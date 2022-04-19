import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigatorComponent } from './core/navigator/navigator.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './productos/productos.component';
import { GestionComponent } from './gestion/gestion.component';
import { HttpClientModule } from '@angular/common/http';
import { RequestService } from './services/service.service';
import { FooterComponent } from './core/footer/footer.component';
import { ProductoListComponent } from './nuevos-productos/producto-list/producto-list.component';
import { ProductoNewComponent } from './nuevos-productos/producto-new/producto-new.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavigatorComponent,
    HomeComponent,
    GestionComponent,
    ProductComponent,
    FooterComponent,
    ProductoListComponent,
    ProductoNewComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }

