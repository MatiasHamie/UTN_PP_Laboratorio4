import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { Pais } from 'src/app/clases/pais';
import { FirestoreService } from 'src/app/servicios/firebase/firestore.service';
import { ServicioPaisesService } from 'src/app/servicios/servicio-paises.service';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.css']
})
export class ModificarComponent implements OnInit {

  paisesRetornadosDeLaApi: Pais[];
  @Input() actor: Actor;
  continuar: boolean;
  nombrePaisElegido: string;

  constructor(private firestore: FirestoreService,private paisesService: ServicioPaisesService) { }

  ngOnInit(): void {

  }

  continuarModificando(){
    this.continuar = true;
    this.traerPaises()
  }

  cancelar(){
    this.continuar = false;
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

  modificar(){
    this.firestore.actualizar(this.actor.id,this.actor);
  }
}
