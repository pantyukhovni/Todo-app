import React from 'react';
import TodoForm from './container/todoForm';
import Typography from '@material-ui/core/Typography';
import MainContainer from './container/Container';
import TodoList from './container/TodoList';

const App = (props) => {
  return (
    <MainContainer>
      <Typography component="h1" variant="h2">
        Todos
      </Typography>
      <TodoForm />
      <TodoList />
    </MainContainer>
  );
};
export default App;
