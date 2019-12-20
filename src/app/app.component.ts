import { Component, OnInit } from '@angular/core';
import { Item } from './types';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private title: string;
  private tasks: Item[];

  ngOnInit() {
    this.title = 'shoppinglist';
    this.tasks = [
      { name: 'pollo', done: false},
      { name: 'carne', done: true},
      { name: 'brocoli', done: false}
    ];
  }
}
