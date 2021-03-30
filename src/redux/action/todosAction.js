import {
  ADD_NEW_TODO,
  DELETE_ALL_TODOS,
  DELETE_TODO,
  FETCHING_TODOS,
  SET_CURRENT_USER,
  SET_TODO,
  TODO_CHANGE_STATE
} from '../actionTypes/ActionTypes';
import { todoAPI } from './../../API/index';

export const addNewTodo = (todo) => ({ type: ADD_NEW_TODO, todo });
export const setTodos = (todos) => ({ type: SET_TODO, todos });
export const deleteTodo = (id) => ({ type: DELETE_TODO, id });
export const getCurrrentUser = (currentUserId) => ({
  type: SET_CURRENT_USER,
  currentUserId
});
export const deleteAllTodos = () => ({ type: DELETE_ALL_TODOS });
export const fetchingTodos = (bool) => ({ type: FETCHING_TODOS, bool });

export const changeStateTodo = (id, completed) => ({
  type: TODO_CHANGE_STATE,
  id: id,
  completed: completed
});

export const addNewTodo2 = (todo) => {
  return (dispatch) => {
    const todoData = {
      title: todo,
      id: Date.now(),
      completed: false
    };
    dispatch(addNewTodo(todoData));
  };
};

export const fetchTodo = (userId) => {
  return (dispatch) => {
    dispatch(fetchingTodos(true));
    setTimeout(() => {
      todoAPI.getTodo((userId = 1)).then((data) => {
        dispatch(fetchingTodos(false));
        dispatch(setTodos(data));
        dispatch(getCurrrentUser(userId));
      }, 5000);
    });
  };
};
