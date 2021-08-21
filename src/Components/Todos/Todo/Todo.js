import { Fragment, useContext } from "react";
import { Context, ACTIONS_CONTEXT } from "../../../store/context";
import classes from "./Todo.module.css";

const Todo = () => {
  const ctx = useContext(Context);
  const ACTIONS = useContext(ACTIONS_CONTEXT);

  const completeHandler = (id) => {
    ctx.dispatch({ type: ACTIONS.TOGGLE_TODO, payload: { id } });
  };

  const deleteHandler = (id) => {
    ctx.dispatch({ type: ACTIONS.DELETE_TODO, payload: { id } });
  };

  return (
    <Fragment>
      {ctx.todos.map((todo) => (
        <div key={todo.id} className={classes.todo}>
          <div
            onClick={() => completeHandler(todo.id)}
            className={classes.divTitle}
            title="Mark as completed"
          >
            <p
              className={`${classes.title} ${
                todo.complete ? classes.completed : ""
              }`}
            >
              {todo.name}
            </p>
          </div>
          <div
            className={classes.icon}
            onClick={() => deleteHandler(todo.id)}
            title="Delete"
          >
            <i className="fas fa-times"></i>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default Todo;
