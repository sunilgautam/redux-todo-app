import { ADD_TODO_SUCCESS, TOGGLE_TODO } from '../constants/ActionTypes';

export const addTodo = todoTitle => {
  return dispatch => {
    // make some api call
    // api.addTodo(todo).then(newTodo => dispatch(addTodoSuccess(newTodo)))
    dispatch(addTodoSuccess({
      id: Math.random().toString(32).substr(2),
      title: todoTitle,
      completed: false,
    }));
  };
};

export const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  todo,
})

export const toggleTodo = todo => ({
  type: TOGGLE_TODO,
  todo: {
    id: todo.id,
    completed: !todo.completed,
  },
})
