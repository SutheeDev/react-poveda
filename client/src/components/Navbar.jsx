import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false);
  const containerRef = useRef(null);

  const closeAll = () => {
    setIsMenuOpen(false);
    setIsSubMenuOpen(false);
  };

  const handleScroll = () => {
    closeAll();
  };

  useEffect(() => {
    window.addEventListener("scroll", closeAll);
    window.addEventListener("resize", closeAll);

    const handleClickOutside = (event) => {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target)
      ) {
        setIsSubMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", closeAll);
      window.removeEventListener("resize", closeAll);
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <Wrapper>
      <div className="main-container">
        <Logo />
        <div className="navlinks-container">
          <div className={isMenuOpen ? "navlinks show" : "navlinks"}>
            <Link className="link about-us" to="/">
              about us
            </Link>
            <div className="visit-container" ref={containerRef}>
              <div className="linkToVisit">
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
                className={
                  isSubMenuOpen ? "visit-subMenu open" : "visit-subMenu"
                }
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
            </div>
            <Link
              className={isSubMenuOpen ? "link pricing extend" : "link pricing"}
              to="/"
            >
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
              <div
                className="hamburger-open"
                onClick={() => setIsMenuOpen(true)}
              >
                <BiMenu />
              </div>
            )}
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Navbar;

const Wrapper = styled.nav`
  background-color: var(--green-2);
  box-shadow: var(--navbar-shadow);
  .main-container {
    padding: 1.6em 1.5em;

    /* Separate Logo and everything else */
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
  }
  .navlinks-container {
    text-align: right;

    /* Switch the order and get hamburger menu above the rest of links */
    display: flex;
    flex-direction: column-reverse;
    /* Push everything to the right including Hamburger menu */
    align-items: flex-end;
  }
  .navlinks {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
    padding-top: 2em;
    /* Hide all links when isMenuOpen is false */
    position: relative;
    z-index: -1;
    margin-top: -12em;
    opacity: 0;

    transition: var(--global-transition);
  }
  .navlinks .link,
  .navlinks .arrow-down {
    color: var(--green-2);
  }
  .navlinks.show {
    /* Show all links when isMenuOpen is true */
    margin-top: 0;
    z-index: 1;
    opacity: 1;
  }
  .navlinks.show .link,
  .navlinks.show .arrow-down {
    color: var(--white);
  }
  .hamburger-menu-container {
    width: fit-content;
  }
  .hamburger-open,
  .hamburger-close {
    color: var(--white);
    font-size: 2rem;
    display: flex;
    cursor: pointer;
    /* Push hamberger icons to the top-right edge */
    margin-right: -8px;
    margin-top: -5px;
  }
  .link {
    text-transform: uppercase;
  }
  /* visit-container flex layout */
  .visit-container {
    display: flex;
    flex-direction: column;
    gap: 1.5em;

    position: relative;
  }
  .linkToVisit {
    display: flex;
    flex-direction: row-reverse;
    gap: 0.6em;
    align-items: center;
  }
  .arrow-down {
    display: flex;
    font-size: 0.7rem;
    cursor: pointer;
  }
  .visit-subMenu {
    background-color: var(--green-4);

    position: absolute;
    top: 29.5px;
    right: -1.5em;
    padding: 0.8em 1.5em 0.8em 0;
    width: 100vw;
    z-index: -1;
    display: none;
  }
  .visit-subMenu.open {
    display: block;
  }
  .subLink-container {
    display: flex;
    flex-direction: column;
    gap: 1.5em;
  }
  .sub-link {
    background-color: var(--green-4);
  }
  .pricing {
    margin-top: 0;

    transition: var(--global-transition);
  }
  .pricing.extend {
    margin-top: 130px;
  }
  @media screen and (min-width: 950px) {
    background-color: transparent;
    box-shadow: none;
    .main-container {
      padding: 1.7em 1.7em;
      align-items: center;
    }
    .navlinks-container {
      flex-direction: row;
    }
    .navlinks {
      flex-direction: row;
      padding-top: 0;
      gap: 3em;
      /* Reset and display navlinks no matter isMenuOpen is true or false */
      margin-top: 0;
      z-index: 1;
      opacity: 1;
    }
    .navlinks .link,
    .navlinks .arrow-down {
      color: var(--white);
    }
    /* Hide hamburger on big screen */
    .hamburger-menu-container {
      display: none;
    }
    .link {
      font-size: 0.875rem;
    }
    .visit-container {
      /* flex-direction: row; */
    }
    .linkToVisit {
      flex-direction: row;
    }
    .visit-subMenu {
      display: grid;
      top: 50px;
      right: -90px;
      width: 147px;
      padding: 0.8em 1.5em 0.8em 1.5em;
      border-radius: var(--border-radius);
      opacity: 0;

      transition: var(--global-transition);
    }
    .visit-subMenu.open {
      top: 60px;
      opacity: 1;
    }
    .subLink-container {
      justify-content: flex-start;
      text-align: left;
    }
    .pricing.extend {
      margin-top: 0;
    }
  }
`;
