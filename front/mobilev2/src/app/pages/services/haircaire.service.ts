import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from 'src/app/app.constants';
import { ProductList } from 'src/app/pages/customers/models/ProductList';
import {JsonConvert, Any} from "json2typescript"


@Injectable({
  providedIn: 'root'
})
export class HaircaireService {
  
  results    : Array<any> = [];
  loading    : boolean = false ; 
  haircairedata : ProductList = undefined;

  constructor(private httpClient : HttpClient) {}
 
  getHaircaireProducts() : Observable<any>{
    return this.httpClient.get(`${API_URL}/services/type/HAIR`);
  }

  convert(productsJson : Any) : ProductList{

    let jsonConvert : JsonConvert = new JsonConvert();        
    let productList : ProductList;
    
    try {
      productList = jsonConvert.deserializeObject(productsJson, ProductList);
    } catch (e) {
        console.log((<Error>e));
    }
    return productList;
  }

}
