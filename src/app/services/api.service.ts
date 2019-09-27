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

  readProducts(): Observable<Product[]>{
    return this.httpClient.get<Product[]>(`${this.PHP_API_SERVER}/backend/api/read.php`);
  }

  createProduct(Product: Product): Observable<Product>{
    return this.httpClient.post<Product>(`${this.PHP_API_SERVER}/backend/api/create.php`, Product);
  }

  updateProduct(Product: Product){
    return this.httpClient.put<Product>(`${this.PHP_API_SERVER}/backend/api/update.php`, Product);   
  }

  deleteProduct(id: number){
    return this.httpClient.delete<Product>(`${this.PHP_API_SERVER}/backend/api/delete.php/?id=${id}`);
  }
}
