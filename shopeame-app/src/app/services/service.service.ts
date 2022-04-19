import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:3000/';


const productosUrl = baseUrl + 'products';

@Injectable()
export class RequestService {

  constructor(private http: HttpClient) { }

  getProductos() {
    return this.http.get(productosUrl);
  }
  postProduct(myProduct : any) {
    return this.http.post(productosUrl, myProduct);
  }
  searchProductos(mySearchString : string) {
    return this.http.get(productosUrl+'?q='+mySearchString);
  }
  deleteProductos(myId : number) {
    return this.http.delete(productosUrl+'/'+myId);
  }
}
