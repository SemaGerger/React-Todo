import React, { useReducer } from 'react';

 function reducer (state, action){
        switch (action.type) {
            case 'SET_TODO':
                return{
                    ...state,
                    todo: action.value
                }
            case 'ADD_TODO':
                return{
                    ...state,
                    todo: '',
                    todos: [
                        ...state.todos,
                        action.todo
                    ]
                }
        }
    }

const MakeTodoWithReducer = () => {
    const [state, dispatch] =useReducer(reducer, {
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
    }
    const buttonStyle = {color: state.todo ? 'green' : '',}
 
  return (
    <div>
       <h2>Todo With Reducer </h2>
         <form onSubmit={submitHandle}>
            <input
                type='text'
                onChange={inputChange}
                value={state.todo}
                placeholder='Write Something'
            />
            <button 
                disabled={!state.todo} 
                type='submit'
                style={buttonStyle}>
                Add
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

export default MakeTodoWithReducer;