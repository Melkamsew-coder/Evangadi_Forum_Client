import React from 'react'
import classes from "./header.module.css"
import Logo from "../../assets/images/EvangadiLogo.png";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <div className={classes.logo}>
          <a href="#"><img src={Logo} alt="" /></a>
        </div>
        <nav>
          <a href="#">Home</a>
          <a href="#">How it works</a>
          <a href="/" className={classes.sign__in}>
            Sign In
          </a>
        </nav>
      </header>
    </>
  );
}

export default Header