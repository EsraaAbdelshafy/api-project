import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient) { }

getProducts()
{
 return this._HttpClient.get('https://fakestoreapi.com/products')

}


}
