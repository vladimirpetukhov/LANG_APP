import { HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class MapService {

  constructor(private http: HttpClient) { }

  getCapabilities() {
    const headers = new HttpHeaders({ 'Content-Type': 'text/xml' }).set('Accept', 'text/xml');

    return this.http.get('http://localhost:8081/api/map', {headers:headers});
  }

  getLayer(id: string) {
    return this.http.get(`http://localhost:8081/api/map/${id}`);
  }

}
