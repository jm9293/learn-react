import './App.css'
import TodoList from "./components/todo/TodoList.jsx";
import {useState} from "react";

export default function AppTodo() {
  const [todos, setTodos] = useState([
    {id : 0, label: 'HTML&CSS 공부하기'},
    {id : 1, label: '자바스크립트 공부하기'},
  ]);
  return (
    <div>
      <h2>할일 목록</h2>
      <TodoList todos={todos}/>
      <TodoList todos={todos}/>
    </div>
  )
}
