import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pais } from 'src/app/clases/pais';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {

  @Input() paises: Pais[];
  @Output() nombrePais: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  avisarNombrePaisElegidoAlPadre(nombre: string){
    this.nombrePais.emit(nombre);
  }

}
