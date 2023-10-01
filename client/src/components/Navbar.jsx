import { useState, useEffect } from "react";
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

  const handleScroll = () => {
    closeAll();
  };

  // useEffect(() => {
  //   window.addEventListener("scroll", closeAll);
  //   window.addEventListener("resize", closeAll);
  //   return () => {
  //     window.removeEventListener("scroll", closeAll);
  //     window.removeEventListener("resize", closeAll);
  //   };
  // }, []);

  return (
    <Wrapper>
      <div className="main-container">
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

const Wrapper = styled.nav``;
