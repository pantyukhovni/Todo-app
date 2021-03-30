import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useState } from 'react';
import {
  addNewTodo2,
  deleteAllTodos,
  fetchTodo
} from '../redux/action/todosAction';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '20px'
  }
});

const TodoForm = (props) => {
  const [value, setValue] = useState('');
  const currentUserId = useSelector((state) => state.todos.currentUserId);
  const classes = useStyles(props);
  const dispatch = useDispatch();
  const id = 1;
  const addTodo = useCallback(() => {
    dispatch(addNewTodo2(value));
    setValue('');
  });
  const fetchTodos = useCallback(() => {
    if (id !== currentUserId) {
      dispatch(fetchTodo());
    }
  });
  const clear = useCallback(() => {
    dispatch(deleteAllTodos());
  });

  return (
    <form className={classes.root}>
      <TextField
        variant="outlined"
        placeholder="add todo"
        margin="normal"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        variant="contained"
        color="primary"
        onClick={() => addTodo(value)}
        disabled={!value}>
        add todo
      </Button>
      <Button variant="contained" color="secondary" onClick={fetchTodos}>
        Get todos
      </Button>
      <Button variant="contained" onClick={clear}>
        clear todos
      </Button>
    </form>
  );
};

export default TodoForm;
