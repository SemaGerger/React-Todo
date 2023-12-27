import { memo } from "react";
import TodoItems from "./TodoItems";

function Todos ({todos}){
    return(
        <ul> 
            {todos.map((todo, index) => 
        <TodoItems 
            key={index} 
            todo={todo} /> )}
        </ul>
    )
}
export default memo(Todos);