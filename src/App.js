import React, { Component } from "react";
import Todos from "./components/Todos";
// import "./App.css";
import AddTodo from "./components/AddTodo";
import Header from "./components/layout/Header";
//import {v4 as uuid} from "uuid";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./components/layout/About";
import Footer from "./components/layout/Footer";
import axios from "axios";

export class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid(),
      //   title: 'Take out the train',
      //   completed: false
      // },
      // {
      //   id: uuid(),
      //   title: 'Take out the trash',
      //   completed: true
      // },
      // {
      //   id: uuid(),
      //   title: 'Dinner',
      //   completed: false
      // }
    ],
  };

  componentDidMount() {
    axios
      .get("https://jsonplaceholder.typicode.com/todos?_limit=5")
      .then((res) => this.setState({ todos: res.data }));
  }
  //Toggle
  markBox = (id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      }),
    });
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };
  addTodo = (title) => {
    axios
      .post("https://jsonplaceholder.typicode.com/todos", {
        title,
        completed: false,
      })
      .then((res) => this.setState({ todos: [...this.state.todos, res.data] }));
    // const newTodo = {
    //   id:uuid(),
    //   title,
    //   completed: false
    // }
    // this.setState({todos: [...this.state.todos, newTodo]})
  };

  render() {
    return (
      <React.Fragment>
        <Router>
          <div className="App">
            <div className="container">
              <Header />
              <Route
                exact
                path="/"
                render={(props) => (
                  <React.Fragment>
                    <AddTodo addTodo={this.addTodo} />
                    <Todos
                      todos={this.state.todos}
                      markBox={this.markBox}
                      delTodo={this.delTodo}
                    />
                  </React.Fragment>
                )}
              />
              <Route path="/about" component={About} />
              <Footer />
            </div>
          </div>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
