export class Peliculas {
  id: string;
  nombre: string;
  tipo: Tipo;
  fechaEstreno: string;
  cantPublico: number;
  fotoPelicula: any;
}

export enum Tipo{
  terror,
  comedia,
  amor,
  otros
}

// a. id
// b. Nombre
// c. tipo { terror , comedia, amor ,otros }
// d. fecha de estreno,
// e. cantidad de público
// f. Foto de la película

