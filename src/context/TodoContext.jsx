import { createContext, useContext } from 'react';
import { useImmerReducer } from 'use-immer';
import todoReducer from '../reducer/todoReducer.js';

export const TodoContext = createContext(null);
export const TodoDispatchContext = createContext(null);
export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useImmerReducer(todoReducer, []);

  return (
    <TodoContext.Provider value={todos}>
      <TodoDispatchContext.Provider value={dispatch}>
        {children}
      </TodoDispatchContext.Provider>
    </TodoContext.Provider>
  );
};

export function useTodos() {
  return useContext(TodoContext);
}

export function useTodoDispatch() {
  return useContext(TodoDispatchContext);
}
