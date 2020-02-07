import { Component } from '@angular/core';
import { OrderService } from 'src/app/services/order.service';
import { Platform } from '@ionic/angular';
import { OrderList } from 'src/app/models/OrderList';

@Component({
  selector: 'app-order-list',
  templateUrl: './order-list.page.html',
  styleUrls: ['./order-list.page.scss'],
})
export class OrderListPage {

  public orders : OrderList;

  constructor(private orderService: OrderService, private plt: Platform) {

    this.plt.ready().then(() => {
      this.orderService.getOrders().subscribe(
        response => {
          this.orders = this.orderService.convert(response);
        },
        error => {
          console.log(error);
        }
      );
    })
  }

}
