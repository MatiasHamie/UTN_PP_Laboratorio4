import { Component, Input, OnInit } from '@angular/core';
import { Actor } from 'src/app/clases/actor';
import { FirestoreService } from 'src/app/servicios/firebase/firestore.service';

@Component({
  selector: 'app-borrar',
  templateUrl: './borrar.component.html',
  styleUrls: ['./borrar.component.css']
})
export class BorrarComponent implements OnInit {

  @Input() actor: Actor;
  continuar: boolean = false;
  constructor(private firestore: FirestoreService) { }

  ngOnInit(): void {
  }

  continuarBorrando(){
    this.continuar = true;
  }

  cancelar(){
    this.continuar = false;
  }

  borrar(){
    if(this.continuar){
      this.firestore.borrar(this.actor.id);
    }
  }

}
