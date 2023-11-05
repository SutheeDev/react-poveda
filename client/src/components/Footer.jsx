import { Logo } from "../components";
import { Link } from "react-router-dom";
import styled from "styled-components";
import {
  BiLogoTwitter,
  BiLogoFacebookCircle,
  BiLogoInstagramAlt,
} from "react-icons/bi";

const Footer = () => {
  return (
    <Wrapper>
      <div className="main-container">
        <div className="logo-container">
          <Logo />
        </div>
        <div className="links-container">
          <Link className="link" to="/aboutus">
            about us
          </Link>
          <Link className="link" to="/visit">
            visit
          </Link>
          <Link className="link" to="/pricing">
            pricing
          </Link>
          <Link className="link" to="/contact">
            contact
          </Link>
        </div>
        <div className="contact-container">
          <div className="contact">
            <p>email@example.com</p>
            <p>123-456-7890</p>
          </div>
          <div className="social-container">
            <a
              className="social-icon"
              href="https://twitter.com/"
              target="_blank"
            >
              <BiLogoTwitter />
            </a>
            <a
              className="social-icon"
              href="https://www.facebook.com/"
              target="_blank"
            >
              <BiLogoFacebookCircle />
            </a>
            <a
              className="social-icon"
              href="https://www.instagram.com/"
              target="_blank"
            >
              <BiLogoInstagramAlt />
            </a>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
export default Footer;

const Wrapper = styled.footer`
  background-color: var(--grey);
  color: var(--green-2);
  padding: 6em var(--side-contain-sm);
  .logo,
  .links-container,
  .link {
    color: var(--green-2);
  }
  .logo {
    display: inline-block;
  }
  .links-container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
  .logo,
  .links-container,
  .contact {
    margin: 0 0 1em 0;
  }
  .link {
    text-transform: capitalize;
  }
  .link,
  .contact {
    font-size: 0.85rem;
    line-height: 1.8;
    letter-spacing: 2px;
  }
  .social-container {
    display: flex;
    align-items: center;
    gap: 1em;
  }
  a {
    color: var(--green-2);
  }
  .social-icon {
    font-size: 1.3rem;
    display: flex;
    cursor: pointer;
  }
  @media screen and (min-width: 950px) {
    padding: 6em var(--side-contain-950);
    .main-container {
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
    }
    .logo-container {
      width: 50%;
    }

    .links-container,
    .contact-container {
      width: 25%;
    }
  }
  @media screen and (min-width: 1200px) {
    .main-container {
      max-width: var(--side-contain-max);
      padding: 0em var(--side-contain-950);
      margin: 0 auto;
    }
    .link,
    .contact {
      font-size: 1rem;
    }
  }
`;
