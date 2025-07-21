import { inject, Injectable, OnInit } from '@angular/core';
import { WorkshopModel } from '../models/workshop';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkshopService {
  private apiUrl = 'https://accente-culturale-api.onrender.com/api/v1/workshops';

  http = inject(HttpClient);

  constructor() { 
    
  }

  getWorkshops() : Observable<WorkshopModel[]> {
    return this.http.get<WorkshopModel[]>(this.apiUrl);
  }
}
