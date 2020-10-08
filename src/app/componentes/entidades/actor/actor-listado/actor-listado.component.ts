import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FirestoreService } from 'src/app/servicios/firebase/firestore.service';
import { Actor } from "../../../../clases/actor";

@Component({
  selector: 'app-actor-listado',
  templateUrl: './actor-listado.component.html',
  styleUrls: ['./actor-listado.component.css']
})
export class ActorListadoComponent implements OnInit {

  @Output() actorOutput: EventEmitter<Actor> = new EventEmitter();

  datosTraidos: any[];
  actorElegido: Actor;
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
    this.traerTodoDeFirebase();
  }

  traerTodoDeFirebase(){
    this.firestore.traerTodo().subscribe(snapshots => {
      this.datosTraidos = [];
      snapshots.forEach((dato) => {
        this.datosTraidos.push({
          id: dato.payload.doc.id,
          ...dato.payload.doc.data() as Actor
        });
      });
      console.log(this.datosTraidos);
    });
  }

  seEligioActor(actor: Actor){
    this.actorElegido = actor;
    this.actorOutput.emit(this.actorElegido);
  }
}
