import { useState } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  return (
    <Wrapper>
      <Logo />
      <div className="navlinks-container">
        <div className={isMenuOpen ? "navlinks show" : "navlinks"}>
          <Link className="link about-us" to="/">
            about us
          </Link>
          <div className="visit-container">
            <Link className="link" to="/">
              visit
            </Link>
            <div
              className="arrow-down"
              onClick={() => setIsSubMenuOpen(!isSubMenuOpen)}
            >
              <BiSolidDownArrow />
            </div>
          </div>
          <div
            className={isSubMenuOpen ? "visit-subMenu open" : "visit-subMenu"}
          >
            <div className="subLink-container">
              <Link className="link sub-link" to="/adventure">
                adventure
              </Link>
              <Link className="link sub-link" to="/culture">
                culture
              </Link>
              <Link className="link sub-link" to="/relax">
                relax
              </Link>
            </div>
          </div>
          <Link className="link pricing" to="/">
            pricing
          </Link>
          <Link className={isMenuOpen ? "link alter-shadow" : "link"} to="/">
            contact
          </Link>
        </div>
        <div className="hamburger-menu-container">
          {isMenuOpen ? (
            <div className="hamburger-close" onClick={() => closeAll()}>
              <BiX />
            </div>
          ) : (
            <div className="hamburger-open" onClick={() => setIsMenuOpen(true)}>
              <BiMenu />
            </div>
          )}
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
  box-shadow: var(--navbar-shadow);

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
    text-align: right;
    display: flex;
    flex-direction: column;

    z-index: -1;
    margin-top: -190px;
    transition: var(--global-transition);
  }
  .navlinks.show {
    margin-top: 0;
  }
  .link {
    color: var(--white);
    text-transform: uppercase;
    padding: 0.9em 0;
    padding-right: var(--side-padding);
    background-color: var(--green-2);
  }
  .sub-link {
    background-color: var(--green-4);
  }
  .visit-container {
    background-color: var(--green-2);
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
  }
  .arrow-down {
    color: var(--white);
    display: flex;
    font-size: 0.8rem;
    margin-right: 0.6em;
    cursor: pointer;
  }
  .visit-subMenu {
    position: relative;
    z-index: -2;
    margin-top: -142px;

    transition: var(--global-transition);
  }
  .visit-subMenu.open {
    margin-top: 0;
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
    cursor: pointer;
  }
  .link.alter-shadow {
    box-shadow: var(--navbar-shadow);
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

      z-index: 1;
      margin-top: 0;
    }
    .visit-subMenu {
      position: absolute;
      top: 47px;
      left: 27%;
      margin-top: 0;
      opacity: 0;
      z-index: -99;

      transition: var(--global-transition);
    }
    .subLink-container {
      width: 100%;
      padding: 0.9em var(--side-padding);
      border-radius: var(--border-radius);
      background-color: var(--green-2);
      align-items: flex-start;
    }
    .visit-container {
      flex-direction: row;
      .link {
        padding-right: 0;
      }
      .arrow-down {
        font-size: 0.8rem;
        margin-left: 0.6em;
        margin-right: 0;
      }
    }
    .visit-subMenu.open {
      opacity: 1;
      z-index: 5;
      top: 67px;
    }
    .pricing {
      padding-left: var(--side-padding);
    }
    .sub-link {
      padding-right: 0;
      background-color: var(--green-2);
    }
    .link {
      font-size: 0.875rem;
    }
    .link.alter-shadow {
      box-shadow: none;
    }
  }
`;
