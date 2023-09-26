import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = () => {
  return (
    <div>
      <Link className="logo" to="/">
        poveda
      </Link>
    </div>
  );
};

export default Logo;

const Wrapper = styled.div``;
