export default function TodoList( {todos = [], handleDeleteTodo, onToggleTodo}) {

  return (
    <ul>
      {todos.map(todo =>
        <li key={todo.id}>
          <input type="checkBox" checked={todo.done} onChange={(e) => onToggleTodo(todo.id, e.target.checked)}/>
          <span>{todo.done ? (<del>{todo.text}</del>) : todo.text}</span>
          <button onClick={() => handleDeleteTodo(todo.id)}>X</button>
        </li>
      )}
    </ul>
  )
}
