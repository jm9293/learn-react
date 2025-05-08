import {useContext, useState} from "react";
import {TodoContext, TodoDispatchContext} from "../../context/TodoContext.jsx";

export default function AddTodo() {
  const [todoText, setTodoText] = useState('');
  const dispatch = useContext(TodoDispatchContext);
  const todos = useContext(TodoContext);

  // addTodo
  const handleAddTodo = () => {
    dispatch({
      type: 'added',
      nextId: todos.length,
      todoText
    })
  }

  const handleAddTodoOnEnter = (e) => {
    if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
      handleAddTodo();
      setTodoText('');
    }
  }

  return (
    <div>
      <input
        type="text"
        value={todoText}
        onChange={(e) => setTodoText(e.target.value)}
        onKeyDown={handleAddTodoOnEnter}
      />
      <button onClick={handleAddTodo}>추가</button>
    </div>
  )
}
