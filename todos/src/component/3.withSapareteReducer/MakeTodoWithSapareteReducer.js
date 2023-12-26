import React, { useReducer } from 'react';
import todoReducer from '../3.withSapareteReducer/todoReducer'


const MakeTodoWithSapareteReducer = () => {
    const [state, dispatch] =useReducer(todoReducer, { 
        todos: [],
        todo: '', 
    });

    const inputChange = (e) =>{ 
        dispatch({
            type: 'SET_TODO', 
            value: e.target.value
        })
    };

    const submitHandle = (e) =>{
      e.preventDefault()   
      dispatch({
        type: 'ADD_TODO', 
        todo: state.todo
      }) 
    };

 
  return (
    <div> <h2>Todo With Saparete Reducer</h2>
         <form onSubmit={submitHandle}>
            <input
                type='text'
                placeholder='Write Something'
                onChange={inputChange}
                value={state.todo}
               
            />
            <button 
                type='submit'
                disabled={!state.todo} 
                >Add
            </button>
         </form>
         <ul> {state.todos.map ((todo, index) => (
            <li key={index}>
                {todo}
            </li>
         ))}
            
         </ul>
   </div>
  );
};

export default MakeTodoWithSapareteReducer;
