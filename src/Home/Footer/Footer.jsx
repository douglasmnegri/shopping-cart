import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import IconContent from "../../Icons";

function Footer() {
  return (
    <footer>
      <h1>Gengar's TCG Shop</h1>
      <div>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li>
            <IconContent icon={faInstagram} content="Follow us on Instagram" />
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
