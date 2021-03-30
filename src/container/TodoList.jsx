import React, { useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Row from '../components/row';
import { Checkbox } from '@material-ui/core';
import bin from './../assets/bin/delete.svg';
import c from './TodoList.module.css';
import { changeStateTodo, deleteTodo } from '../redux/action/todosAction';
import Preloader from '../components/preloader/Preloader';

const TodoList = (props) => {
  const todos = useSelector((state) => state.todos.todos);
  const isFetching = useSelector((state) => state.todos.isFetching);
  const dispatch = useDispatch();
  const delTodo = useCallback((id) => {
    dispatch(deleteTodo(id));
  });

  const changeValue = useCallback((id, completed) => {
    dispatch(changeStateTodo(id, completed));
  });

  if (isFetching) {
    return <Preloader />;
  }
  return (
    <>
      {todos.map((todo) => (
        <Row key={todo.id}>
          <div className={c.firstWrapper}>
            <Checkbox
              checked={todo.completed}
              onClick={() => changeValue(todo.id, !todo.completed)}
            />
            <span className={todo.completed ? c.completed : ''}>
              {todo.title ? todo.title : 'нет задачи'}
            </span>
          </div>
          <div>
            <img
              src={bin}
              className={c.button}
              onClick={() => delTodo(todo.id)}
            />
          </div>
        </Row>
      ))}
    </>
  );
};

export default TodoList;
