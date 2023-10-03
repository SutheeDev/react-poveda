import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BiMenu } from "react-icons/bi";
import { BiX } from "react-icons/bi";
import { BiSolidDownArrow } from "react-icons/bi";
import styled from "styled-components";
import Logo from "./Logo";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(true);
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
    flex-direction: row-reverse;
    flex-direction: column;
    gap: 0.6em;
    gap: 1.5em;
    /* align-items: center; */

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
      background-color: var(--green-4);

      position: absolute;
      top: 40px;
      right: -90px;
      width: 147px;
      padding: 0.8em 1.5em 0.8em 1.5em;
      border-radius: var(--border-radius);
    }
    .subLink-container {
      justify-content: flex-start;
      text-align: left;
    }
    .pricing {
      margin-top: 0;
    }
  }
`;

// const Wrapper = styled.nav`
//   background-color: var(--green-2);
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   height: 75px;
//   box-shadow: var(--navbar-shadow);

//   .navlinks-container {
//     display: flex;
//     justify-content: space-between;
//     align-items: center;
//     position: relative;
//   }
//   .navlinks {
//     width: 100vw;
//     position: absolute;
//     top: 53px;
//     right: 0;
//     text-align: right;
//     display: flex;
//     flex-direction: column;

//     z-index: -1;
//     margin-top: -190px;
//     transition: var(--global-transition);
//   }
//   .navlinks.show {
//     margin-top: 0;
//   }
//   .link {
//     color: var(--white);
//     text-transform: uppercase;
//     padding: 0.9em 0;
//     padding-right: var(--side-padding);
//     background-color: var(--green-2);
//   }
//   .sub-link {
//     background-color: var(--green-4);
//   }
//   .visit-container {
//     background-color: var(--green-2);
//     display: flex;
//     flex-direction: row-reverse;
//     align-items: center;
//   }
//   .arrow-down {
//     color: var(--white);
//     display: flex;
//     font-size: 0.8rem;
//     margin-right: 0.6em;
//     cursor: pointer;
//   }
//   .visit-subMenu {
//     position: relative;
//     z-index: -2;
//     margin-top: -142px;

//     transition: var(--global-transition);
//   }
//   .visit-subMenu.open {
//     margin-top: 0;
//   }
//   .subLink-container {
//     width: 100vw;
//     display: flex;
//     flex-direction: column;
//     background-color: var(--green-4);
//   }
//   .hamburger-menu-container {
//     display: grid;
//     place-items: center;
//     padding-right: var(--side-padding);
//   }
//   .hamburger-open,
//   .hamburger-close {
//     color: var(--white);
//     font-size: 2rem;
//     grid-area: 1/1;
//     display: flex;
//     cursor: pointer;
//   }
//   .link.alter-shadow {
//     box-shadow: var(--navbar-shadow);
//   }
//   @media screen and (min-width: 900px) {
//     height: 100px;
//     .hamburger-menu-container {
//       display: none;
//     }
//     .navlinks {
//       width: 100%;
//       position: relative;
//       top: 0;
//       text-align: right;
//       flex-direction: row;

//       z-index: 1;
//       margin-top: 0;
//     }
//     .visit-subMenu {
//       position: absolute;
//       top: 47px;
//       left: 27%;
//       margin-top: 0;
//       opacity: 0;
//       z-index: -99;

//       transition: var(--global-transition);
//     }
//     .subLink-container {
//       width: 100%;
//       padding: 0.9em var(--side-padding);
//       border-radius: var(--border-radius);
//       background-color: var(--green-2);
//       align-items: flex-start;
//     }
//     .visit-container {
//       flex-direction: row;
//       .link {
//         padding-right: 0;
//       }
//       .arrow-down {
//         font-size: 0.8rem;
//         margin-left: 0.6em;
//         margin-right: 0;
//       }
//     }
//     .visit-subMenu.open {
//       opacity: 1;
//       z-index: 5;
//       top: 67px;
//     }
//     .pricing {
//       padding-left: var(--side-padding);
//     }
//     .sub-link {
//       padding-right: 0;
//       background-color: var(--green-2);
//     }
//     .link {
//       font-size: 0.875rem;
//     }
//     .link.alter-shadow {
//       box-shadow: none;
//     }
//   }
// `;
