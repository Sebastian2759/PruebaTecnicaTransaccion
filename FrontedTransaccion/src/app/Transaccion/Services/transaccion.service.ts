import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ClientesGlobalDto, ConcesionariosGlobalDto, Transaccion, VehiculosGlobalDto } from '../Interfaces/Transaccion';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransaccionService {
  private _httpcliente: HttpClient;
  private url = "https://localhost:7128/api/TransaccionesGlobal";

  constructor(httpcliente: HttpClient) { this._httpcliente = httpcliente; }

  getTransacciones(): Observable<Transaccion[]> {
    return this._httpcliente.get<Transaccion[]>(this.url);
  }
  getTransaccion(id: number): Observable<Transaccion> {
    return this._httpcliente.get<Transaccion>(this.url + '/' + id);
  }
  createTrans(transaccion: Transaccion): Observable<Transaccion> {
    return this._httpcliente.post<Transaccion>(this.url, transaccion);
  }
  updateTrans(transaccion: Transaccion): Observable<Transaccion> {
    return this._httpcliente.put<Transaccion>(this.url + '/' + transaccion + transaccion.transaccionID, transaccion);
  }
  deleteTrans(id: number): Observable<Transaccion> {
    return this._httpcliente.delete<Transaccion>(this.url + '/' + id);
  }
  getTransaccionByVehiculoID(): Observable<VehiculosGlobalDto[]> {
    return this._httpcliente.get<VehiculosGlobalDto[]>(this.url + '/Vehiculos/');
  }
  getTransaccionByClienteID(): Observable<ClientesGlobalDto[]> {
    return this._httpcliente.get<ClientesGlobalDto[]>(this.url + '/Clientes/');
  }
  getTransaccionByConcesionarioID(): Observable<ConcesionariosGlobalDto[]> {
    return this._httpcliente.get<ConcesionariosGlobalDto[]>(this.url + '/Concesionarios/');
  }

}
