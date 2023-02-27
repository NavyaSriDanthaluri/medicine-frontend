import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Medicine } from './medicine';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {
  
  
  private baseURL = "http://localhost:8080/medicalstore";

  constructor(private httpClient: HttpClient) { }

  getMedicinesList(): Observable<Medicine[]>{
    return this.httpClient.get<Medicine[]>('${this.baseURL}/medicines');

  }

  addMedicine(medicine: Medicine): Observable<any>{
    return this.httpClient.post(`${this.baseURL}/addmedicine`,medicine);
  }

  updateMedicine(id: number, medicine: Medicine):Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/update/${id}`,medicine);
  }

  deleteMedicine(id: number):Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/delete/${id}`);

  }

  getMedicineById(id: number) {
    return this.httpClient.get<Medicine[]>(`${this.baseURL}/${id}`);
  }

}
