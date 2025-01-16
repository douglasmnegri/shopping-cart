import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faCartShopping,
  faTruck,
} from "@fortawesome/free-solid-svg-icons";
import scarletViolet from "../../assets/sv_banner.png";
import horizonsSeries from "../../assets/hs_banner.png";
import twilight from "../../assets/twilight.png";
import IconContent from "../../Icons";

import banner from "../../assets/tcg.png";
import classes from "./body.module.css";
import btnClass from "../../Button/button.module.css";

function Body() {
  return (
    <>
      <div>
        <img src={banner} alt="pokemon banner tcg" className={classes.banner} />
      </div>
      <div className={classes.ruler}>
        <IconContent
          icon={faCartShopping}
          content="Special Prices on Bundles"
          style={classes.iconContainer}
        />
        <IconContent
          icon={faBox}
          content="30-Day Exchange Policy"
          style={classes.iconContainer}
        />
        <IconContent
          icon={faTruck}
          content="Same-day Shipping"
          style={classes.iconContainer}
        />
      </div>
      <div className={classes.rectBannerContainer}>
        <div className={classes.rectBannerBox}>
          <button className={`${classes.content} ${btnClass.mainBtn}`}>
            Stellar Crown Cards!
          </button>
          <img
            src={scarletViolet}
            alt="scarlet and violet banner"
            className={classes.rectBanner}
          />
        </div>
        <div className={classes.rectBannerBox}>
          <button className={`${classes.content} ${btnClass.mainBtn}`}>
            Horizons Cards!
          </button>
          <img
            src={horizonsSeries}
            alt="horizons series banner"
            className={classes.rectBanner}
          />
        </div>
        <div className={classes.rectBannerBox}>
          <button className={`${classes.content} ${btnClass.mainBtn}`}>
            Twilight Masquerade Cards!
          </button>
          <img
            src={twilight}
            alt="twilight series banner"
            className={classes.rectBanner}
          />
        </div>
      </div>
    </>
  );
}
export default Body;
