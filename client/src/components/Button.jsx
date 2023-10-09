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
    <Wrapper>
      <Link to={path} className="btn">
        {text}
      </Link>
    </Wrapper>
  );
};
export default Button;

const Wrapper = styled.div`
  .btn {
    text-transform: uppercase;
  }
`;
