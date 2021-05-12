import { API_CONFIG } from './../config/api.config';
import { Cliente } from './../model/cliente';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  constructor(private http: HttpClient) { }

  insert(cliente: Cliente): Observable<void> {
    return this.http.post<void>(`${API_CONFIG.baseUrl}/clientes`, cliente);
  }
}
