import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { ServicioPaisesService } from "../../../../servicios/servicio-paises.service";

@Component({
  selector: 'app-actor-alta',
  templateUrl: './actor-alta.component.html',
  styleUrls: ['./actor-alta.component.css']
})
export class ActorAltaComponent implements OnInit, OnChanges {
  paisesRetornadosDeLaApi: Pais[];
  actorNuevo: Actor;
  nombrePaisElegido: string;
  fechaElegida;

  constructor(private paisesService: ServicioPaisesService) { }
  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.nombrePaisElegido);
  }

  ngOnInit(): void {
    this.traerPaises();
  }

  traerPaises(){
    this.paisesService.getPaises().subscribe( paises => {
      this.paisesRetornadosDeLaApi = [];
      paises.forEach(pais => {
        this.paisesRetornadosDeLaApi.push({
          nombre: pais.name,
          capital: pais.capital,
          region: pais.region,
          imgBandera: pais.flag
        })
      })
    })
  }
  seEligioPais(nombrePais: string){
    this.nombrePaisElegido = nombrePais;
  }

  altaActor(){

  }
}
