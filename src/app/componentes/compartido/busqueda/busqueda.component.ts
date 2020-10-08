import { Component, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firebase/firestore.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  formato: string = '';
  idABuscarDetalle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onClick_ElegirFormato(formatoElegido: string){
    this.formato = formatoElegido;
  }


  idRecibido(id: string){
    this.idABuscarDetalle = id;
    // console.log('id desde busqueda', this.idABuscarDetalle);
  }
}
