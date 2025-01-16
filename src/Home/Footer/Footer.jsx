import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faSquareXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import IconContent from "../../Icons";
import classes from "./footer.module.css";
import gengar from "../../assets/gengar.png";

function Footer() {
  return (
    <footer className={classes.container}>
      <div className={classes.info}>
        <h1>Info</h1>
        <ul className={classes.ul}>
          <li>Help Center</li>
          <li>Accessibility</li>
          <li>Leave Us Feedback</li>
        </ul>
      </div>
      <div>
        <img src={gengar} alt="gengar" className={classes.gengar} />
        <h1>Gengar's TCG Shop</h1>
      </div>

      <div className={classes.socials}>
        <h1>Socials</h1>
        <div className={classes.logo}>
          <IconContent icon={faInstagram} size="xl" />
          <IconContent icon={faFacebook} size="xl" />
          <IconContent icon={faYoutube} size="xl" />
          <IconContent icon={faSquareXTwitter} size="xl" />
        </div>
      </div>
    </footer>
  );
}

export default Footer;
