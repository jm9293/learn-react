import {useTodoDispatch} from "../../context/TodoContext.jsx";
import {memo} from "react";

export default memo(function TodoItem({todo}) {
  const dispatch = useTodoDispatch()

  // deleteTodo
  const handleDeleteTodo = (deleteId) => {
    dispatch({
      type: 'deleted',
      deleteId
    })
  }

  // done
  const onToggleTodo = (id, done) => {
    dispatch({
      type: 'done',
      id,
      done
    })
  }

  return (
    <label>
      <input type="checkBox" checked={todo.done} onChange={(e) => onToggleTodo(todo.id, e.target.checked || false)}/>
      <span>{todo.done ? (<del>{todo.text}</del>) : todo.text}</span>
      <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
    </label>
  )
})
