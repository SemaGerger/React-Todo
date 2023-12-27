const initialState = {
    todos: [],
    todo: '',
  };
  
  const reducer = (state = initialState, action) => {
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
        case 'SET_SEARCH':
            return{
                ...state,
                search: action.value
         
            }
    }
  };
  export default reducer;