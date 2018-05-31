import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Injectable } from '@angular/core';
import { TodoItem } from '../models/todoitem.interface';

@Injectable()
export class TodoitemService {

  todoItemsCollectionRef: AngularFirestoreCollection<TodoItem>;

  constructor(private afs: AngularFirestore, private auth: AngularFireAuth) {
    this.todoItemsCollectionRef = this.afs.collection('todoItems/').doc(this.auth.auth.currentUser.uid).collection<TodoItem>('items/');    
  }

  get allTodos() {
    return this.todoItemsCollectionRef.valueChanges();
  }

  addTodo(newTodo: TodoItem) {
    this.todoItemsCollectionRef.add(newTodo)
        .then(resp => {
          this.todoItemsCollectionRef.doc(resp.id).update({
            id: resp.id
          })
        })
        .catch(err => {
          console.log("Something went wrong: " + err.message)
        })
  }

  deleteTodo(delTodo: TodoItem) {
    this.todoItemsCollectionRef.doc(delTodo.id).delete();
  }

  completeTodo(todoItem: TodoItem) {
    this.todoItemsCollectionRef.doc(todoItem.id).update({
      isComplete: !todoItem.isComplete
    });
  }
}
