import { Link } from "react-router-dom";
import styled from "styled-components";

const Navbar = () => {
  return (
    <nav>
      <div className="logo-container">
        <Link className="logo" to="/">
          poveda
        </Link>
      </div>
      <div className="navlinks-container">
        <div className="navlinks">
          <Link className="link" to="/">
            about us
          </Link>
          <div className="visit-container">
            <Link className="link" to="/">
              visit
            </Link>
            <div className="visit-icon"></div>
          </div>
          <Link className="link" to="/">
            pricing
          </Link>
          <Link className="link" to="/">
            contact
          </Link>
        </div>
        <div className="hamburger-menu-container"></div>
      </div>
    </nav>
  );
};
export default Navbar;

const Wrapper = styled.nav``;
