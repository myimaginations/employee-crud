import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StateService {

  private readonly apiUrl = 'http://localhost:3000/states';

  constructor(private readonly http: HttpClient) {}

  getStates(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
