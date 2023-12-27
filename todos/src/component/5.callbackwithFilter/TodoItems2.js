import { memo } from "react";

function TodoItems2 ({todo}){
   return(
        <li>
        {todo}
        </li>
    )
}
export default memo(TodoItems2);