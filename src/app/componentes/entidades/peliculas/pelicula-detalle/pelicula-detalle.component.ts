import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firebase/firestore.service';

@Component({
  selector: 'app-pelicula-detalle',
  templateUrl: './pelicula-detalle.component.html',
  styleUrls: ['./pelicula-detalle.component.css']
})
export class PeliculaDetalleComponent implements OnInit {

  @Input() idDetalle: string;

  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.buscarDetallePelicula()
  }

  buscarDetallePelicula(){
    console.log('desde detalle',this.idDetalle);
    // this.firestore.traerUno(this.id).subscribe(snapshots => {
    //   console.log("Retorno -> ",snapshots)
    // });

  }

}
