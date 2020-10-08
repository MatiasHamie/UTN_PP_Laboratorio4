import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BienvenidoComponent } from './componentes/bienvenido/bienvenido.component';
import { BusquedaComponent } from './componentes/compartido/busqueda/busqueda.component';
import { ActorAltaComponent } from './componentes/entidades/actor/actor-alta/actor-alta.component';
import { ActorListadoComponent } from './componentes/entidades/actor/actor-listado/actor-listado.component';
import { PeliculaAltaComponent } from './componentes/entidades/peliculas/pelicula-alta/pelicula-alta.component';
import { PeliculaListadoComponent } from './componentes/entidades/peliculas/pelicula-listado/pelicula-listado.component';
import { PeliculaDetalleComponent } from './componentes/entidades/peliculas/pelicula-detalle/pelicula-detalle.component';
import { ErrorComponent } from './componentes/error/error.component';
import { BorrarComponent } from './componentes/compartido/borrar/borrar.component';
import { MostrarComponent } from './componentes/compartido/mostrar/mostrar.component';
import { ModificarComponent } from './componentes/compartido/modificar/modificar.component';

const routes: Routes = [
  {path: '', redirectTo: 'busqueda', pathMatch: 'full'},
  {path: 'bienvenido', component: BienvenidoComponent},
  {path: 'peliculas/alta', component: PeliculaAltaComponent},
  {path: 'peliculas/listado', component: PeliculaListadoComponent},
  {path: 'peliculas/detalle', component: PeliculaDetalleComponent},
  {path: 'actor/alta', component: ActorAltaComponent},
  {path: 'actor/listado', component: ActorListadoComponent},
  {path: 'mostrar', component: MostrarComponent},
  {path: 'borrar', component: BorrarComponent},
  {path: 'modificar', component: ModificarComponent},
  {path: 'busqueda', component: BusquedaComponent},
  {path: 'error', component: ErrorComponent},
  {path: '**', redirectTo: 'error', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
