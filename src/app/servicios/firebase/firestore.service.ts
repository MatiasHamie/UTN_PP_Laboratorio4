import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) {}

  //Crear
  public crearUno(data: {nombre: string, url: string}) {
    return this.firestore.collection('actores').add(data);
  }

  //Traer uno
  public traerUno(documentId: string) {
    console.log('Desde traerUno',documentId);
    return this.firestore.collection('actores').doc(documentId).snapshotChanges();
  }

  //Traer todo
  public traerTodo() {
    return this.firestore.collection('actores').snapshotChanges();
  }

  //Actualizar
  public actualizar(documentId: string, data: any) {
    return this.firestore.collection('actores').doc(documentId).set(data);
  }

  //Actualizar
  public borrar(documentId: string) {
    return this.firestore.collection('actores').doc(documentId).delete();
  }
}
