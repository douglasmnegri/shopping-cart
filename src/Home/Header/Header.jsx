import classes from "./header.module.css"
function Header() {
  return (
    <div className={classes.header}>
      <h1>Gengar's Cards Collection Shop</h1>
      <div className={classes.link}>
        <p>Home</p>
        <p>Shop</p>
      </div>
    </div>
  );
}

export default Header;
