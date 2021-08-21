import React, { useReducer } from "react";

// Context Object
const Context = React.createContext({
  todos: [],
  dispatch: (type, payload) => {},
});
// ACTIONS Object
const ACTIONS_CONTEXT = React.createContext({
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  DELETE_COMPLETED: "delete-completed",
});

const ACTIONS = {
  ADD_TODO: "add-todo",
  TOGGLE_TODO: "toggle-todo",
  DELETE_TODO: "delete-todo",
  DELETE_COMPLETED: "delete-completed",
};

const reducer = (state, action) => {
  switch (action.type) {
    case ACTIONS.ADD_TODO:
      return [
        { name: action.payload.name, complete: false, id: Date.now() },
        ...state,
      ];

    case ACTIONS.TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : todo
      );

    case ACTIONS.DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload.id);

    case ACTIONS.DELETE_COMPLETED:
      return state.filter((todo) => todo.complete !== true);

    default:
      return state;
  }
};

// Component 'Context Management'
const ContextProvider = (props) => {
  const [todos, dispatch] = useReducer(
    reducer,
    JSON.parse(localStorage.getItem("todos")) || []
  );

  localStorage.setItem("todos", JSON.stringify(todos));

  return (
    <Context.Provider value={{ todos: todos, dispatch: dispatch }}>
      {props.children}
    </Context.Provider>
  );
};

export { Context, ContextProvider, ACTIONS_CONTEXT };
