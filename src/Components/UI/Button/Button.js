import classes from "./Button.module.css";

const Button = (props) => {
  return (
    <button
      className={`${classes.button} ${props.className}`}
      type={`${props.type}`}
      title={`${props.title}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
