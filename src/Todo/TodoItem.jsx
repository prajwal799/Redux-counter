import React from "react";
import {useSelector} from "react-redux";
const TodoItem = () => {
  const todos = useSelector((state) => state.todos)

    return(
        <div>
          {todos.map((item) => (
              <div key={item.id}>{item.title}</div>
          ))}
        </div>
    )
}
export  {TodoItem};