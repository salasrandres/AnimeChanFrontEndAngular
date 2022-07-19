import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Quote } from '../interfaces/quote';

@Injectable({
  providedIn: 'root'
})
export class AnimeService {

  constructor(private http: HttpClient) { }

  getRandom() {
    return this.http.get(`${environment.url}/random`);
  }

  getRandomQuotes() {
    return this.http.get<Quote[]>(`${environment.url}/quotes`);
  }

  getQuotesByCharacter(name: string) {
    return this.http.get(`${environment.url}/quotes/character?name=${name}`);
  }

  getAllAnimeList() {
    return this.http.get(`${environment.url}/available/anime`);
  }

}
