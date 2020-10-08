import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Peliculas } from 'src/app/clases/peliculas';

@Component({
  selector: 'app-grilla-pelicula',
  templateUrl: './grilla-pelicula.component.html',
  styleUrls: ['./grilla-pelicula.component.css']
})
export class GrillaPeliculaComponent implements OnInit {

  @Input() peliculas: Peliculas[];

  @Output() idAEmitir: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  traerDetalle(id: string){
    this.idAEmitir.emit(id);
  }
}
