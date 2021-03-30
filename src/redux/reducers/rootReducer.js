import { combineReducers } from 'redux';
import TodosReducer from './todosReducer';

const rootReducer = combineReducers({
  todos: TodosReducer
});

export default rootReducer;
