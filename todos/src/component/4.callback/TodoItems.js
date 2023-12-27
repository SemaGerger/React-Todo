import { memo } from "react";

function TodoItems ({todo}){
   return(
        <li>
        {todo}
        </li>
    )
}
export default memo(TodoItems);