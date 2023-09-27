import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  return (
    <Wrapper>
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
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  background-color: var(--green-2);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.3em 1em;
  height: 75px;
  .navlinks-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .navlinks {
    position: absolute;
    top: 75px;
    right: 0;
    background-color: var(--green-1);
  }
  .link {
    color: var(--white);
    text-transform: uppercase;
  }
  .visit-container {
    display: flex;
    align-items: center;
    gap: 0.5em;
  }
  .arrow-down {
    color: var(--white);
    display: flex;
  }
  .hamburger-menu-container {
    display: grid;
    place-items: center;
  }
  .hamburger-open,
  .hamburger-close {
    color: var(--white);
    font-size: 2rem;
    grid-area: 1/1;
    display: flex;
  }
`;
