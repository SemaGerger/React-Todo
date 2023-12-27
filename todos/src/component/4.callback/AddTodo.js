import { memo } from "react";

function AddTodo ({submitHandle, inputChange, todo}) {
   return(
    <form onSubmit={submitHandle}>
        <input type="text" 
                placeholder="Write Something"
                value={todo} 
                onChange={inputChange} />
        <button type='submit' 
        disabled={!todo}>Add</button>
    </form>
)
}
export default memo(AddTodo);