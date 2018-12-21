import React, { Component } from 'react';
import { connect } from 'react-redux';
import TodoList from './TodoList';
import { addTodo, toggleTodo } from './actions/todos';
import './app.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todoInput: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTodoInputChange = this.handleTodoInputChange.bind(this);
    this.handleToggleTodo = this.handleToggleTodo.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { todoInput } = this.state;
    if (todoInput) {
      // add todo
      this.props.addTodo(todoInput);

      // clear todo input
      this.setState({ todoInput: '' });
    }
  }

  handleTodoInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      todoInput: value,
    }));
  }

  handleToggleTodo(todo) {
    return () => {
      this.props.toggleTodo(todo);
    };
  }

  render() {
    return (
      <div className="container">
        <div className="todo-form">
          <form onSubmit={this.handleSubmit}>
            <input value={this.state.todoInput} onChange={this.handleTodoInputChange} type="text" className="form-input" placeholder="Your next todo ..." />
          </form>
        </div>
        <TodoList onToggleTodo={this.handleToggleTodo} />
      </div>
    );
  }
}

export default connect(null, { addTodo, toggleTodo })(App);
