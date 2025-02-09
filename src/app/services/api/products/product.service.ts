import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProductRepresentation } from '../models/product-representation';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private baseurl = 'https://fakestoreddddapi.com/';

  constructor(
    private http: HttpClient
  ) { }

  getAllProductsWithLimit(limit:number = 5){
    const productsUrl = `${this.baseurl}products?limit=${limit}`;
    return this.http.get<Array<ProductRepresentation>>(productsUrl);
  }

  createProduct(product:ProductRepresentation){
    const productsUrl = `${this.baseurl}products`;
    return this.http.post<ProductRepresentation>(productsUrl, product);
  }
}
