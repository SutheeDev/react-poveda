import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <nav>
      <Logo />
      <div className="navlinks-container">
        <div className="navlinks">
          <Link className="link" to="/">
            about us
          </Link>
          <div className="visit-container">
            <Link className="link" to="/">
              visit
            </Link>
            <div className="arrow-down">
              <BiSolidDownArrow />
            </div>
            <div className="visit-icon"></div>
          </div>
          <Link className="link" to="/">
            pricing
          </Link>
          <Link className="link" to="/">
            contact
          </Link>
        </div>
        <div className="hamburger-menu-container">
          <div className="hamburger-open">
            <BiMenu />
          </div>
          <div className="hamburger-close">
            <BiX />
          </div>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;

const Wrapper = styled.nav``;
