import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <Wrapper>
      <Link className="logo" to="/">
        poveda
      </Link>
    </Wrapper>
  );
};

export default Logo;

const Wrapper = styled.div`
  .logo {
    font-family: var(--font-1);
    color: var(--white);
    text-transform: uppercase;
    background-color: transparent;
    font-size: 1.3rem;
  }
  @media screen and (min-width: 950px) {
    .logo {
      font-size: 2.2rem;
      letter-spacing: 1.5px;
    }
  }
`;
