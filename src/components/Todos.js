import React, { Component } from 'react'
import TodoItem from './TodoItem'
import PropTypes from 'prop-types';
import { Paper,List } from '@material-ui/core';
import Spinner from './layout/Spinner';

export class Todos extends Component {
  render() {
    if(this.props.loading) {
      return <Spinner />
    }
    else {
    return this.props.todos.length > 0 &&  (
      <Paper style={{ margin: 16 }}>
      <List style={{ overflow: 'scroll' }}>
      {this.props.todos.map((todo) => (
      <TodoItem key= {todo.id} todo={todo} markBox={this.props.markBox} delTodo={this.props.delTodo}/>
      ))}
      </List>
      </Paper>
   
    
    )
      }
  }
}

Todos.propTypes = {
    todos: PropTypes.array.isRequired, 
    markBox: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired,
    loading: PropTypes.bool
}

export default Todos