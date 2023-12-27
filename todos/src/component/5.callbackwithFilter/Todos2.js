import { memo } from "react";
import TodoItems2 from "./TodoItems2";

function Todos2 ({todos}){
    return(
        <ul> 
            {todos.map((todo, index) => 
        <TodoItems2
            key={index} 
            todo={todo} /> )}
        </ul>
    )
}
export default memo(Todos2);