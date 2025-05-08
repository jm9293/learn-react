import TodoItem from "./TodoItem.jsx";
import {useContext, useMemo, useState} from "react";
import {TodoContext, useTodos} from "../../context/TodoContext.jsx";

export default function TodoList() {
  const todos = useTodos();
  const [isShowDone, setIsShowDone] = useState(false)

  const {totalCount , doneCount} = useMemo(() => {
    const doneCount = todos.filter((todo) => todo.done).length
    return {totalCount: todos.length , doneCount}
  }, [todos])


  return (
    <>
      <div>
        <input type="checkbox" id="isShowDone" checked={isShowDone} onChange={() => setIsShowDone(!isShowDone)}/>
        <label htmlFor="isShowDone">완료돤 항목 보기 ({doneCount}/{totalCount})</label>
      </div>
      <ul>
        {todos.filter((todo) => {
          return isShowDone ? todo.done : true
        }).map(todo =>
          <li key={todo.id}>
            <TodoItem todo={todo}></TodoItem>
          </li>
        )}
      </ul>
    </>

  )
}
