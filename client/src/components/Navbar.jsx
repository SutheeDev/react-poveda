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
          </div>
          <div className="visit-subMenu">
            <div className="subLink-container">
              <Link className="link sub-link" to="/">
                adventure
              </Link>
              <Link className="link sub-link" to="/">
                culture
              </Link>
              <Link className="link sub-link" to="/">
                relax
              </Link>
            </div>
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
  height: 75px;
  .navlinks-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  }
  .navlinks {
    width: 100vw;
    position: absolute;
    top: 53px;
    right: 0;
    background-color: var(--green-2);
    text-align: right;
    display: flex;
    flex-direction: column;
  }
  .link {
    color: var(--white);
    text-transform: uppercase;
    padding: 0.9em 0;
    padding-right: var(--side-padding);
  }
  .visit-container {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .arrow-down {
    color: var(--white);
    display: flex;
    font-size: 0.8rem;
    margin-right: 0.6em;
  }
  .subLink-container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    background-color: var(--green-4);
  }
  .hamburger-menu-container {
    display: grid;
    place-items: center;
    padding-right: var(--side-padding);
  }
  .hamburger-open,
  .hamburger-close {
    color: var(--white);
    font-size: 2rem;
    grid-area: 1/1;
    display: flex;
  }

  @media screen and (min-width: 900px) {
    height: 100px;
    .hamburger-menu-container {
      display: none;
    }
    .navlinks {
      width: 100%;
      position: relative;
      top: 0;
      text-align: right;
      flex-direction: row;
    }

    .visit-subMenu {
      position: absolute;
      top: 67px;
      left: 27%;
    }
    .subLink-container {
      width: 100%;
      padding: 0.9em var(--side-padding);
      border-radius: var(--border-radius);
      background-color: var(--green-2);
      align-items: flex-start;
    }
    .sub-link {
      padding-right: 0;
    }
    .link {
      font-size: 0.875rem;
    }
  }
`;
