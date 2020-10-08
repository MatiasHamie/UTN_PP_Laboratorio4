import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-tabla-pelicula',
  templateUrl: './tabla-pelicula.component.html',
  styleUrls: ['./tabla-pelicula.component.css']
})
export class TablaPeliculaComponent implements OnInit {

  @Input() peliculas: Peliculas[];
  @Output() idAEmitir: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  traerDetalle(id: string){
    this.idAEmitir.emit(id);
  }

}
