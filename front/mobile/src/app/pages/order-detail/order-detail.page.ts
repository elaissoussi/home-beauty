import { Component, OnInit } from '@angular/core';
import { Platform } from '@ionic/angular';
import { OrderService } from 'src/app/services/order.service';
import { Order } from 'src/app/models/Order';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.page.html',
  styleUrls: ['./order-detail.page.scss'],
})
export class OrderDetailPage {

  public orderId: number;
  public order: Order;

  constructor(private orderService: OrderService,
    private plt: Platform,
    private route: ActivatedRoute) {

    this.plt.ready().then(() => {

      this.orderId = parseInt(this.route.snapshot.paramMap.get('id'));

      this.orderService.getOrder(this.orderId).subscribe(
        response => {
          this.order = this.orderService.convertOrder(response);
        },
        error => {
          console.log(error);
        }
      );
    })
  }


}
