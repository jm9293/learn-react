export default function todoReducer(draft, action) {
  console.log(action);
  //type
  switch (action.type) {
    case 'added': {
      const { nextId, todoText } = action;
      draft.push({ id: nextId, text: todoText, done: false });
      break;
    }
    case 'added_index': {
      const { nextId, insertAt, todoText } = action;
      draft.splice(insertAt, 0, { id: nextId, text: todoText, done: false });
      break;
    }
    case 'deleted': {
      const { deleteId } = action;
      return draft.filter(todo => todo.id !== deleteId);
    }
    case 'done': {
      const { id, done } = action;
      const target = draft.find(item => item.id === id);
      if (target) {
        target.done = done;
      }
      break;
    }
    case 'reverse': {
      return draft.toReversed;
    }
    default: {
      throw Error('알 수 없는 액션 타입: ' + action.type);
    }
  }
}
