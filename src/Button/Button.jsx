import classes from "./button.module.css";

function Button({ name }) {
  return (
    <div>
      <button className={classes.mainBtn}></button>
    </div>
  );
}

export default Button;
