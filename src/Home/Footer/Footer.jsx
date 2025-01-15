import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import IconContent from "../../Icons";
import classes from "./footer.module.css";

function Footer() {
  return (
    <footer className={classes.container}>
      <h1>Gengar's TCG Shop</h1>
      <div className={classes.socials}>
        <h1>Socials</h1>
        <div className={classes.logo}>
          <IconContent icon={faInstagram} />
          <IconContent icon={faFacebook} />
          <IconContent icon={faYoutube} />
          <IconContent icon={faSquareXTwitter} />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
