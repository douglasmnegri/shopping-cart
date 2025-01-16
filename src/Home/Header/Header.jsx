import classes from "./header.module.css";
import gengar from "../../assets/gengar.png";
function Header() {
  return (
    <div className={classes.header}>
      <div className={classes.title}>
        <img src={gengar} alt="gengar" className={classes.gengar}/>
        <h2>Gengar's Card Shop</h2>
      </div>
      
      <div className={classes.link}>
        <p>Home</p>
        <p>Shop</p>
      </div>
    </div>
  );
}

export default Header;
