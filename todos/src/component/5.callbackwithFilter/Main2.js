import React, { useCallback, useReducer } from 'react';

import todoReducer from '../reducers/todoReducer';
import AddTodo2 from './AddTodo2';
import Todos2 from './Todos2';


const Main2 = () => {

  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    todo: '',
    search: '',
  });

  const submitHandle = useCallback((e) => {
    e.preventDefault()
    dispatch({
      type: 'ADD_TODO',
      todo: state.todo,
    })
  }, [state.todo]);
  
  const inputChange = useCallback((e) => {
    dispatch({
        type: 'SET_TODO',
        value: e.target.value,
    })
    }, []);
  
  const searchHandle = useCallback((e) => {
    dispatch({
      type: 'SET_SEARCH',
      value: e.target.value,
    })
  }, []);

  const filteredTodos = state.todos.filter(
    todo => todo.toLocaleLowerCase('TR')
                .includes(state.search.toLocaleLowerCase('TR')
  ));


  return (
   <div><br/><hr/>
    <h2>5. With filtered</h2>
       <AddTodo2 submitHandle={submitHandle}
                inputChange={inputChange}
                todo={state.todo}
       />
      <hr/>
        <input   type='text'
                value={state.search}
                placeholder='Todo ara'
                onChange={searchHandle}
                
       />
       <Todos2   todos={filteredTodos} />
      
    </div>
  );
};

export default Main2;