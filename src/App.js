import React, {Component} from 'react'
import './App.css'
import Item from './Item'
import TodoForm from './TodoForm'
import Header from './Header'
import Container from "@material-ui/core/Container";

// checkout
class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            todoList: []
        };
            [1,2,3,4,5,6,7,8,9,10].map((item) => this.getTodo(item));
    }

    getTodo(id) {
        const url = `https://jsonplaceholder.typicode.com/todos`
        return fetch(url+'/'+id)
            .then((res)=> res.json())
            .then((res)=> (
                this.setState({todoList: [...this.state.todoList, res]})))
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
            newelement.id = Math.floor(Math.random() * 10001)
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
                <Container color="#111111">
                    <Header users={this.state.todoList}/>
                </Container>

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