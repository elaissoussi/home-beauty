import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { TodoModalComponent } from '../todo-modal/todo-modal.component';


@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  public items;

  listScreen = true;
  addItemScreen = false;


  taskName;
  taskDetails;

  constructor(private modalController: ModalController) { }

  ngOnInit() {

    this.items = [
      {title: 'Task 1', description: 'test1'},
      {title: 'Wash Dishes', description: 'test2'},
      {title: 'Do Vaccuming', description: 'test3'}
    ];

  }

  addItem() {
    this.listScreen = false;
    this.addItemScreen = true;
   



  }



  saveNewItem(){

    this.items.push({title: this.taskName, description: this.taskDetails});

    //return to normal screens
    this.listScreen = true;
    this.addItemScreen = false;
  }


  async openModal(item){
    const modal = await this.modalController.create({
      component: TodoModalComponent,
      componentProps: {
        data: item.description
      }

    })
    await modal.present();
  }

  saveItem(item){
    this.items.push(item);

  }

  viewItem(item){

    this.openModal(item);

  }


  }

