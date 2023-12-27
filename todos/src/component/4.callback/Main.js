import React, { useCallback, useReducer } from 'react';
import todoReducer from '../reducers/todoReducer';
import AddTodo from './AddTodo';
import Todos from './Todos';


const Main = () => {
  
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: '',
  });

  const submitHandle = useCallback((e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo,
    })
  }, [state.todo]);

  const inputChange = useCallback(
    (e) => {
      dispatch({
        type: 'SET_TODO',
        value: e.target.value,
      })
    }, [])

   
  return (
    <div>
    <h2>4. With useReducer & useCallback</h2>
      <AddTodo submitHandle={submitHandle}
        inputChange={inputChange}
        todo={state.todo}
      />
      <Todos todos={state.todos} />
    </div>
  );
};

export default Main;