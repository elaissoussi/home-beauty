import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { API_URL } from './../app.constants';


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
  private cart = [];
  
  results    : Array<any> = [];
  loading    : boolean = false ; 

  constructor(private http : HTTP) {}

  getProducts() {
    return this.data;
  }
 
  getCart() {
    return this.cart;
  }
 
  addProduct(product) {
    this.cart.push(product);
  }

  removeProduct(product) {
    //this.cart.pop(product);
    //let items = this.cartService.getCart();

    let i=0;
    for (let obj of this.cart) {
    i++;
    console.log(obj);
    console.log(product);
      if (obj.id===product.id) {
        
        //selected[obj.id].count++;
        this.cart.splice(i,1);
      } 
      
  }
  }

  getHaircaireServices(){
   
    let apiUrl =  `${API_URL}/services/type/HAIR`;

    this.http.get(apiUrl, {}, {})
              .then(response => {
                this.results = JSON.parse(response.data);
                this.loading = false;                
              })
              .catch(error => {
                console.log(error.error);            
              });
  }

}
