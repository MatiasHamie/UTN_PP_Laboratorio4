import { Component, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { FirestoreService } from 'src/app/servicios/firebase/firestore.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {

  paisesRetornadosDeLaApi: Pais[];
  actorElegidoPorUsuario: Actor;
  accion: string;

  // formato: string = '';
  // idABuscarDetalle: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  seEligioActor(actorElegido: Actor){
    this.actorElegidoPorUsuario = actorElegido as Actor;
    // console.log('actor elegido: ', this.actorElegidoPorUsuario);
  }

  accionARealizar(accionARealizar: string){
    this.accion = accionARealizar;
  }




  // onClick_ElegirFormato(formatoElegido: string){
  //   this.formato = formatoElegido;
  // }


  // idRecibido(id: string){
  //   this.idABuscarDetalle = id;
  //   // console.log('id desde busqueda', this.idABuscarDetalle);
  // }
}
