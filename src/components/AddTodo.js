import React, { Component } from "react";
import PropTypes from "prop-types";
import { TextField, Paper, Button, Grid } from "@material-ui/core";

export class AddTodo extends Component {
  state = {
    title: "",
  };

  onChange = (e) => this.setState({ [e.target.name]: e.target.value });
  onSubmit = (e) => {
    e.preventDefault();
    this.props.addTodo(this.state.title);
    this.setState({ title: "" });
  };

  render() {
    return (
      <Paper style={{ margin: 16, padding: 16 }}>
        <Grid container>
          <Grid xs={10} md={11} item style={{ paddingRight: 16 }}>
            <TextField
              name="title"
              placeholder="Add Todo here"
              value={this.state.title}
              onChange={this.onChange}
              fullWidth
            />
          </Grid>
          <Grid xs={2} md={1} item>
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              onClick={this.onSubmit}
            >
              Add
            </Button>
          </Grid>
        </Grid>
      </Paper>
    );
  }
}

AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired,
};

export default AddTodo;

// <form onSubmit={this.onSubmit} style={{display: 'flex'}}>
//             <input type="text" name="title" style={{flex: '10',padding: '5px'}}
//             placeholder="Add Todo ..."
//             value={this.state.title}
//             onChange={this.onChange}
//             />
//             <input type="submit" value="Submit" className="btn" style={{flex: '1'}}
//             placeholder="Add Todo ..."/>
//             </form>
