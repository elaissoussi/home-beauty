import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { API_URL } from './../app.constants';
import { ProductList } from '../models/ProductList';
import {JsonConvert, Any} from "json2typescript"


@Injectable({
  providedIn: 'root'
})
export class HaircaireService {
    
  private data = [
    {
      category: 'Homme',
      //expanded: true,
      products: [
        { id: 0, name: 'Shampoo', price: '8',image:'assets/Coiffure/shamp.jpg' },
        { id: 1, name: 'Barbe', price: '5',image:'assets/Coiffure/barbe.jpg' }
      ]
    },
    {
      category: 'Femme',
      products: [
        { id: 2, name: 'Miche', price: '8',image:'assets/Coiffure/miche.jpg' },
        { id: 3, name: 'Macciage', price: '6',image:'assets/Coiffure/makeup.jpg' }
      ]
    },
    {
      category: 'Enfant',
      products: [
        { id: 4, name: 'Coupe Normal', price: '8',image:'assets/Coiffure/coupenormal.jpg' },
        { id: 5, name: 'Coupe avec quelque chose', price: '5',image:'assets/Coiffure/degradê-com-listra.jpg' },
        { id: 6, name: 'Coupe ', price: '8',image:'assets/Coiffure/coupenormal.jpg' }
      ]
    }
  ];
  
  results    : Array<any> = [];
  loading    : boolean = false ; 

  constructor(private httpClient : HttpClient) {
    this.getHaircaireProducts().subscribe(
        response => {
          console.log(response);
          console.log(this.convert(response));
        },
        error => {
          console.log(error);
        }

    );    

  }

  getProducts() {
    return this.data;
  }
 
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
