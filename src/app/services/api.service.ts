import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

import { Product } from  './../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  PHP_API_SERVER = "https://tiimofeystore.000webhostapp.com";

  constructor(private httpClient: HttpClient) {}

  getProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.PHP_API_SERVER}/products`);
  }

  getProductById(id : number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.PHP_API_SERVER}/products/${id}`);
  }
}
