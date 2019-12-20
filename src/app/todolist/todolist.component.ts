import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.scss']
})
export class TodolistComponent implements OnInit {
  @Input() title: string;
  @Input() tasks: string[];
  @Input() shoppingList: boolean;
  private newItem: string;

  constructor() { }

  ngOnInit() {
  }

  private addItem() {

  }
}
