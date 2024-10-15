import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormpresentationalComponent } from './formpresentational/formpresentational.component';
import { FormcontainerComponent } from './formcontainer/formcontainer.component';
import { ProductocardComponent } from './productos/components/productocard/productocard.component';
import { ProductosContainerComponent } from './productos/containers/productos-container/productos-container.component';
import { ListComponent } from './productos/components/list/list.component';
import { CarritoListComponent } from './carrito/components/carrito-list/carrito-list.component';
import { CarritoContainerComponent } from './carrito/containers/carrito-container/carrito-container.component';
import { UsuarioPerfilComponent } from './usuarios/components/usuario-perfil/usuario-perfil.component';
import { UsuarioContainerComponent } from './usuarios/containers/usuario-container/usuario-container.component';


@NgModule({
  declarations: [
    AppComponent,
    FormpresentationalComponent,
    FormcontainerComponent,
    ProductocardComponent,
    ProductosContainerComponent,
    ListComponent,
    CarritoListComponent,
    CarritoContainerComponent,
    UsuarioPerfilComponent,
    UsuarioContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
