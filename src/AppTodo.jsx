// import './App.css'
import TodoList from "./components/todo/TodoList.jsx";
import AddTodo from "./components/todo/AddTodo.jsx";
import {TodoProvider} from "./context/TodoContext.jsx";
import {useEffect} from "react";

export default function AppTodo() {

  return (
    <TodoProvider>
      <h2>할일 목록</h2>
      <AddTodo></AddTodo>
      <TodoList/>
    </TodoProvider>
  )
}
