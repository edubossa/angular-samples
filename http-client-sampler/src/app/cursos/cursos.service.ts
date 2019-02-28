import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Curso } from './curso';
import { tap, delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private readonly API = `${environment.API}`;

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Curso>(this.API)
      .pipe(
        delay(2000),
        tap(console.log)
      );
  }

}
