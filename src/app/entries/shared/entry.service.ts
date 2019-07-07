// Un servicio no es un componente, pero si una clase que puede tener decoradores. (Teoría)
import { Entry } from './entry.model';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class EntryService {

	// Contructor permite crear un instancia o una representacion del componente.
	constructor(private http: Http) {

	}

	// METÓDOS
	// Metódo getEntries para recuperar la fecha a través del Http Service. Retornará una Promesa que se resolverá con un arreglo de 'entries'.
	// Para especificar el tipo de de dato que retornará el mmétodo se agregan ':' despues de los parentesis del mismo.
	getEntries(): Promise<Entry[]> {
		return  this.http.get('/app/entries')
				.toPromise()
				.then(response => response.json().data as Entry[]);
	}
}