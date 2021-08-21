import { Fragment } from "react";
import TodoForm from "./Components/Todos/TodoForm/TodoForm";
import TodoList from "./Components/Todos/TodoList/TodoList";
const App = () => {
  return (
    <Fragment>
      <TodoForm />
      <TodoList />
    </Fragment>
  );
};

export default App;
