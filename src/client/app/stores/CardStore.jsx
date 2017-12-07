import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class CardStore extends EventEmitter {
  constructor() {
    super()
    this.cards = [
      {
        id:1,
        title: "Read the Book",
        description: "I should read the **whole** book",
        status: "in-progress",
        tasks: []
      },
      {
        id:2,
        title: "Write some code",
        description: "Code along with the samples in the book. The complete source can be found on github.",
        status: "todo",
        tasks: [
          {id: 1, name:"ContactList Example", done:true},
          {id: 2, name:"Kanban Example", done:false},
          {id: 3, name:"My own experiments", done:false}
        ]
      },
    ];
  }

  createTodo(text) {
    const id = Date.now();

    this.todos.push({
      id,
      text,
      complete: false,
    });

    this.emit("change");
  }

  getAll() {
    return this.todos;
  }

  handleActions(action) {
    switch(action.type) {
      case "CREATE_TODO": {
        this.createTodo(action.text);
        break;
      }
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
    }
  }

}

const todoStore = new TodoStore;
dispatcher.register(todoStore.handleActions.bind(todoStore));

export default todoStore;
