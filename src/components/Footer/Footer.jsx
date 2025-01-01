import React from "react";
import classes from "./footer.module.css";
import Logo from "../../assets/images/EvangadiLogo-footer.png";

const Footer = () => {
  return (
    <>
      <footer>
        <div className={classes.social_icons}>
          <div>
            <a href="#">
              <img src={Logo} alt="" />
            </a>
          </div>
          <div>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
          </div>
        </div>
        <div className={classes.links}>
          <h3>Useful Links</h3>
          <a href="#">How it works</a>
          <a href="#">Terms of Service</a>
          <a href="#">Privacy policy</a>
        </div>
        <div className={classes.contact_info}>
          <h3>Contact Info</h3>
          <span>Evangadi Networks</span>
          <span>
            Email:<a href="mailto:support@evangadi.com">support@evangadi.com</a>
          </span>
          <span>Phone: +1-202-386-2702</span>
        </div>
      </footer>
    </>
  );
};

export default Footer;
