import './App.css'
import TodoList from "./components/todo/TodoList.jsx";
import {useReducer, useState} from "react";
import todoReducer from "./components/reducer/todoReducer.js";
import {useImmerReducer} from "use-immer";

export default function AppTodo() {

  const [todoText, setTodoText] = useState('');

  const [todos, dispatch] = useImmerReducer(todoReducer, [])

  const [insertAt, setInsertAt] = useState(0);

  const handleTodoTextChange = (e) => setTodoText(e.target.value)


  const handleAddTodoOnEnter = (e) => {
    if (e.nativeEvent.isComposing) return;
    if (e.key === 'Enter') {
      handleAddTodo();
    }
  }

  // addTodo
  const handleAddTodo = () => {
    dispatch({
      type: 'added',
      nextId: todos.length,
      todoText
    })
    setTodoText('');
  }

  // addTodoByIndex
  const handleAddTodoByIndex = () => {
    dispatch({
      type: 'added_index',
      nextId: todos.length,
      todoText,
      insertAt
    })
    setTodoText('');
  }

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
  // reverse
  const handleReverseTodo = () => {
    dispatch({
      type: 'reverse',
    })
  }

  return (
    <div>
      <h2>할일 목록</h2>
      <div>
        <input
          type="text"
          value={todoText}
          onChange={handleTodoTextChange}
          onKeyDown={handleAddTodoOnEnter}
        />
        <button onClick={handleAddTodo}>추가</button>
      </div>
      <div>
        <select value={insertAt} onChange={(e) => setInsertAt(parseInt(e.target.value))}>
          {todos.map((item, index) => (
            <option key={item.id} value={index}>{index} 번째</option>
          ))}
        </select>
        <button onClick={handleAddTodoByIndex}>{insertAt} 번째 추가</button>
        <button onClick={handleReverseTodo}>리버스</button>
      </div>
      <TodoList todos={todos} handleDeleteTodo={handleDeleteTodo} onToggleTodo={onToggleTodo}/>
    </div>
  )
}
