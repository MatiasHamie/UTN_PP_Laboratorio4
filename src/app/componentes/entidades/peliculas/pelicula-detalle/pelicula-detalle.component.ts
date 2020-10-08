import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firebase/firestore.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit, OnChanges {

  @Input() aesede: string;

  constructor(private firestore: FirestoreService) { }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    this.buscarDetallePelicula()
  }

  ngOnInit(): void {
    this.buscarDetallePelicula()
  }

  buscarDetallePelicula(){
    console.log('desde detalle',this.aesede);
    // this.firestore.traerUno(this.id).subscribe(snapshots => {
    //   console.log("Retorno -> ",snapshots)
    // });

  }

}
