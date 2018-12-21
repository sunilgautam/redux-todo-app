import { ADD_TODO_SUCCESS, TOGGLE_TODO } from '../constants/ActionTypes';

export default function todos(state = [], action = {}) {
  switch (action.type) {
    case ADD_TODO_SUCCESS:
      return [
        ...state,
        action.todo,
      ];
    case TOGGLE_TODO:
      return state.map((todo, index) => {
        if (todo.id !== action.todo.id) {
          return todo;
        }

        return {
          ...todo,
          ...action.todo,
        };
      });
    default:
      return state;
  }
}
