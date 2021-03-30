import {
  ADD_NEW_TODO,
  DELETE_TODO,
  SET_TODO,
  SET_TODO_ID,
  TODO_CHANGE_STATE,
  SET_CURRENT_USER,
  DELETE_ALL_TODOS,
  FETCHING_TODOS
} from '../actionTypes/ActionTypes';

let initialState = {
  todos: [],
  todosIdx: [],
  currentUserId: null,
  isFetching: false
};

const TodosReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_TODO:
      return {
        ...state,
        todos: state.todos.concat(action.todos)
      };
    case FETCHING_TODOS:
      return {
        ...state,
        isFetching: action.bool
      };
    case SET_CURRENT_USER:
      return {
        ...state,
        currentUserId: action.currentUserId
      };
    case SET_TODO_ID:
      return {
        ...state,
        todosIdx: [...state.todos]
      };
    case ADD_NEW_TODO:
      return {
        ...state,
        todos: [...state.todos, action.todo]
      };
    case DELETE_TODO:
      return {
        ...state,
        todos: state.todos.filter((todos) => todos.id !== action.id)
      };
    case TODO_CHANGE_STATE:
      const { id: idTodo } = action;
      const { completed } = action;
      return {
        ...state,
        todos: state.todos.map((todo) => {
          if (todo.id === idTodo) {
            return { ...todo, completed: completed };
          }
          return todo;
        })
      };
    case DELETE_ALL_TODOS:
      return {
        ...state,
        todos: [],
        currentUserId: null
      };
    default:
      return {
        ...state
      };
  }
};

export default TodosReducer;
