import { Component, Input, OnInit } from '@angular/core';
import {Todo} from '../../models/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
      let classes = {
          todo:true,
          'is-complete': this.todo.completed
      }

      return classes;
  }

  onToggle(todo:Todo){
      todo.completed = !todo.completed;
  }

  onDelete(todo:Todo){
      console.log('delete');
  }

}
