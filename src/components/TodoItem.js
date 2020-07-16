import {
  Button,
  Checkbox,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@material-ui/core";
import PropTypes from "prop-types";
import React, { Component } from "react";

export class TodoItem extends Component {
  getItemStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
    };
  };

  render() {
    const { id, title } = this.props.todo;
    return (
      // <div style= {this.getItemStyle()}>
      //     <p>
      //     <input type="checkbox" onChange= {this.props.markBox.bind(this, id)}/> {' '}
      //     {title}
      //     <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle}>X</button>
      //     </p>
      // </div>

      <ListItem divider={this.props.divider}>
        <Checkbox
          onClick={this.props.markBox.bind(this, id)}
          onChange={this.props.markBox.bind(this, id)}
          disableRipple
        />
        <ListItemText primary={title} />
        <ListItemSecondaryAction>
          <Button
            aria-label="Delete Todo"
            onClick={this.props.delTodo.bind(this, id)}
          >
            X
          </Button>
        </ListItemSecondaryAction>
      </ListItem>
    );
  }
}

TodoItem.propTypes = {
  todo: PropTypes.object.isRequired,
  markBox: PropTypes.func.isRequired,
  delTodo: PropTypes.func.isRequired,
};

export default TodoItem;
