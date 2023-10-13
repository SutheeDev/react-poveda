import { Link } from "react-router-dom";
import styled from "styled-components";

const Button = ({
  text,
  path,
  bgColor,
  bdColor,
  txColor,
  bgColorHover,
  bdColorHover,
  txColorHover,
  type,
}) => {
  return (
    <Wrapper
      bgColor={bgColor}
      bdColor={bdColor}
      txColor={txColor}
      bgColorHover={bgColorHover}
      bdColorHover={bdColorHover}
      txColorHover={txColorHover}
    >
      <Link to={path} className="btn">
        {text}
      </Link>
    </Wrapper>
  );
};
export default Button;

const Wrapper = styled.div`
  .btn {
    display: block;
    text-align: center;
    width: 100%;
    font-family: var(--font-2);
    font-size: 0.8rem;
    letter-spacing: 3px;
    padding: 0.7em 2em;
    text-transform: uppercase;
    border: 3px solid ${(props) => props.bdColor};
    background-color: ${(props) => props.bgColor};
    color: ${(props) => props.txColor};
    border-radius: 35px;

    transition: var(--btn-transition);
    &:hover {
      border: 3px solid ${(props) => props.bdColorHover};
      color: ${(props) => props.txColorHover};
      background-color: ${(props) => props.bgColorHover};
    }
  }
  @media screen and (min-width: 450px) {
    .btn {
      display: inline;
      padding: 0.7em 3em;
    }
  }
  @media screen and (min-width: 1200px) {
    .btn {
      font-size: 1rem;
    }
  }
`;
