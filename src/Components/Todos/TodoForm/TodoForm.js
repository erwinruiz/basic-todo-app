import Card from "../../UI/Card/Card";
import Button from "../../UI/Button/Button";
import classes from "./TodoForm.module.css";
import { useState, useContext } from "react";
import { Context, ACTIONS_CONTEXT } from "../../../store/context";

const TodoForm = () => {
  const [name, setName] = useState("");
  const ctx = useContext(Context);
  const ACTIONS = useContext(ACTIONS_CONTEXT);

  const [isValid, setIsValid] = useState(true);

  const validation = () => {
    if (name.trim().length === 0) {
      setTimeout(() => {
        setIsValid(true);
      }, 3000);

      setIsValid(false);
      return;
    }
    setIsValid(true);
    ctx.dispatch({ type: ACTIONS.ADD_TODO, payload: { name } });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    validation();
    setName("");
  };

  const deleteCompletedHandler = () => {
    ctx.dispatch({ type: ACTIONS.DELETE_COMPLETED });
    console.log("clicked");
  };

  return (
    <Card className={classes.container}>
      <form onSubmit={onSubmitHandler}>
        <label className={classes.label}>What need to be done?</label>
        <input
          className={classes.input}
          value={name}
          placeholder={"Do math exercises"}
          onChange={(e) => setName(e.target.value)}
        ></input>
        <Button title="Add" type="submit">
          Add
        </Button>
      </form>
      <Button
        title="Delete completed"
        className={classes.buttonDeleteCompleted}
        onClick={deleteCompletedHandler}
      >
        Delete completed
      </Button>
      {!isValid && (
        <p className={classes.errorText}>Please enter a valid name</p>
      )}
    </Card>
  );
};

export default TodoForm;
