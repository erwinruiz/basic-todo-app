import Card from "../../UI/Card/Card";
import classes from "./TodoList.module.css";
import Todo from "../Todo/Todo";
import { Context } from "../../../store/context";
import { useContext, useState, useEffect } from "react";

const TodoList = () => {
  const ctx = useContext(Context);
  const [isTodosEmpty, setIsTodosEmpty] = useState(true);

  useEffect(() => {
    if (ctx.todos.length !== 0) {
      setIsTodosEmpty(false);
    } else {
      setIsTodosEmpty(true);
    }
  }, [ctx.todos]);

  return (
    <Card className={classes.container}>
      <h1>Todos</h1>
      <Todo />
      {isTodosEmpty && (
        <p className={classes.emptyMessage}>No tasks found. Add one?</p>
      )}
    </Card>
  );
};

export default TodoList;
