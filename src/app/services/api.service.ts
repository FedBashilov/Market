import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from  'rxjs';

import { Product } from  './../models/product.model';
import { User } from  './../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public PHP_API_SERVER = "https://tiimofeystore.000webhostapp.com";

  constructor(private httpClient: HttpClient) {}

  getAllProductsId(): Observable<number[]>{
    return this.httpClient.get<number[]>(`${this.PHP_API_SERVER}/products`);
  }

  getProductById(id : number): Observable<Product>{
    return this.httpClient.get<Product>(`${this.PHP_API_SERVER}/products/${id}`);
  }

  createNewUser(newUser: User): Observable<User>{
    
  	return this.httpClient.post<User>(`${this.PHP_API_SERVER}/users`, newUser );
  }
}
