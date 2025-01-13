import banner from "../../assets/tcg.png";
import classes from "./body.module.css";

function Body() {
  return (
    <div>
      <img src={banner} alt="pokemon banner tcg" className={classes.banner}/>
    </div>
  );
}

export default Body;
