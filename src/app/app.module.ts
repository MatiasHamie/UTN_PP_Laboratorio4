import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { HttpClientModule } from "@angular/common/http";

import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { ErrorComponent } from './componentes/error/error.component';
import { PeliculaAltaComponent } from './componentes/entidades/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/entidades/peliculas/pelicula-listado/pelicula-listado.component';
import { ActorListadoComponent } from './componentes/entidades/actor/actor-listado/actor-listado.component';
import { ActorAltaComponent } from './componentes/entidades/actor/actor-alta/actor-alta.component';
import { TablaPeliculaComponent } from './componentes/compartido/tabla-pelicula/tabla-pelicula.component';
import { GrillaPeliculaComponent } from './componentes/compartido/grilla-pelicula/grilla-pelicula.component';
import { BusquedaComponent } from './componentes/compartido/busqueda/busqueda.component';
import { PeliculaDetalleComponent } from './componentes/entidades/peliculas/pelicula-detalle/pelicula-detalle.component';
import { TablaPaisesComponent } from './componentes/entidades/paises/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';
import { MostrarComponent } from './componentes/compartido/mostrar/mostrar.component';
import { BorrarComponent } from './componentes/compartido/borrar/borrar.component';
import { ModificarComponent } from './componentes/compartido/modificar/modificar.component';
@NgModule({
  declarations: [
    AppComponent,
    BienvenidoComponent,
    ErrorComponent,
    PeliculaAltaComponent,
    PeliculaListadoComponent,
    ActorListadoComponent,
    ActorAltaComponent,
    TablaPeliculaComponent,
    GrillaPeliculaComponent,
    BusquedaComponent,
    PeliculaDetalleComponent,
    TablaPaisesComponent,
    MostrarComponent,
    BorrarComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
