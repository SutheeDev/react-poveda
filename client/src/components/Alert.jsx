import { BiX } from "react-icons/bi";
import styled from "styled-components";

const Alert = ({ alertType, msg }) => {
  return (
    <Wrapper className="alert-content">
      <div className="close-btn">
        <BiX />
      </div>
      <div className="alert-info">
        <p>
          {alertType} : {msg}
        </p>
      </div>
    </Wrapper>
  );
};
export default Alert;

const Wrapper = styled.div``;
