import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { FirestoreService } from "../../../../servicios/firebase/firestore.service";
import { Peliculas } from "../../../../clases/peliculas";

@Component({
  selector: 'app-pelicula-listado',
  templateUrl: './pelicula-listado.component.html',
  styleUrls: ['./pelicula-listado.component.css']
})
export class PeliculaListadoComponent implements OnInit {

  datosTraidos: Peliculas[];
  @Input() formato: string;
  // @Output() idParaBusqueda: EventEmitter<string> = new EventEmitter<string>();
  idABuscarDetalle: string = '';

  constructor(
    private firestore: FirestoreService
  ) { }

  ngOnInit(): void {
    this.traerTodoDeFirebase();
  }

  traerTodoDeFirebase(){
    this.firestore.traerTodo().subscribe(snapshots => {
      this.datosTraidos = [];
      snapshots.forEach((dato) => {
        this.datosTraidos.push({
          id: dato.payload.doc.id,
          ...dato.payload.doc.data() as Peliculas
        });
      });
      console.log(this.datosTraidos);
    });
  }

  seleccionadaPelicula(id: string){
    this.idABuscarDetalle = id;
    console.log('desde pelicula listado' ,this.idABuscarDetalle);
  }
}
