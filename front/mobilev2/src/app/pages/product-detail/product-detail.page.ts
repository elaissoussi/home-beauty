import { Platform } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.page.html',
  styleUrls: ['./product-detail.page.scss'],
})
export class ProductDetailPage implements OnInit {

  constructor(private plt: Platform, private route: ActivatedRoute) {

   /* this.plt.ready().then(() => {
      let id = parseInt(this.route.snapshot.paramMap.get('id'));
      console.log("product id =>" + id);
    });
    */
  }

  ngOnInit() {
  }

}
