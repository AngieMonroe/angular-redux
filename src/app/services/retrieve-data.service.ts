import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RetrieveDataService {
  constructor(private readonly http: HttpClient) {}

  /**
   * Function to make request
   * @returns observable of Characters
   */
  getCharacters(): Observable<any> {
    const url = 'https://rickandmortyapi.com/api/character';
    const characters$ = this.http.get<any>(url);
    return characters$;
  }

  /**
   * Function to make request
   * @returns observable of Locations
   */
  getLocations(): Observable<any> {
    const url = 'https://rickandmortyapi.com/api/location';
    const location$ = this.http.get<any>(url);
    return location$;
  }
  /**
   * Function to make request
   * @returns observable of Episodes
   */
  getEpisodes(): Observable<any> {
    const url = 'https://rickandmortyapi.com/api/episode';
    const location$ = this.http.get<any>(url);
    return location$;
  }
  /**
   * Function to make request
   * @returns observable of Characters
   */
  getCharactersArray(url: string): Observable<any> {
    return this.http.get<any>(url);
  }
}
