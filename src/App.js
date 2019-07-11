import React, {Component} from 'react'
import './App.css'
// import users from './user.json'
import Item from './Item'
import TodoForm from './TodoForm'
import Header from './Header'

class App extends Component {
    state = {
        newTitle: 'Бумеранг не запущен',
        idItem: 'тест',
        todoList: [{
            "userId": 1,
            "id": 1,
            "title": "delectus aut autem",
            "completed": false
        },
            {
                "userId": 1,
                "id": 2,
                "title": "quis ut nam facilis et officia qui",
                "completed": false
            },
            {
                "userId": 1,
                "id": 3,
                "title": "fugiat veniam minus",
                "completed": false
            }]
    }


    addTodo = (value) => {
        let newelement = {
            "userId": 1,
            "id": 1000,
            "title": "",
            "completed": false
        }
        this.setState({ newTitle: value })
        if (value.length) {
            newelement.title = value
            newelement.id = this.state.todoList.length + 100
            this.setState({
                todoList: [...this.state.todoList, newelement]
            })
        }
    }

    delTodo = (id, e) => {
        const todoList = Object.assign([], this.state.todoList)
        todoList.splice(id, 1)
        this.setState({todoList: todoList})
    }

  render () {
    return (
      <div className="App">
        <Header users={this.state.todoList}/>
        <TodoForm addTodo={this.addTodo}/>
          <p>{this.state.newItem} </p>
        <ul>
            {this.state.todoList
                .map((user, id) =>
                        <Item key={user.id}
                              deleteEvent={this.delTodo.bind(this, id)}>
                            {user.title}
                        </Item>
                    )}
        </ul>
      </div>
    );
  }
}

export default App;