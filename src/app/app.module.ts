import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

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
    PeliculaDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
