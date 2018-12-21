import React from 'react';
import { connect } from 'react-redux';

const TodoItem = ({ todo, onToggleTodo }) => (
  <h4 onClick={onToggleTodo(todo)} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>{todo.title}</h4>
)

const TodoList = ({ todos, ...restProps }) => (
  <div>
    {todos.map(todo => <TodoItem key={todo.id} todo={todo} {...restProps} />)}
  </div>
);

function mapStateToProps(state) {
  return {
    todos: state.todos,
  };
}

export default connect(mapStateToProps)(TodoList);
