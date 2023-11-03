import { BiX } from "react-icons/bi";
import styled from "styled-components";

const Alert = ({ alertType, msg, dispatch }) => {
  // const closeBtn = () => {
  //   console.log("close!");
  //   dispatch({ type: ALERT_CLOSE });
  // };

  return (
    <Wrapper className="alert-content">
      {/* <div className="close-btn" onClick={closeBtn}>
        <BiX />
      </div> */}
      <div className="alert-info">
        <p className="alertType">{alertType}</p>
        <p className="message">{msg}</p>
      </div>
    </Wrapper>
  );
};
export default Alert;

const Wrapper = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 1em;
  position: relative;
  .alert-info {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1em 0;
    border-radius: var(--border-radius);
  }
  .alertType {
    color: var(--white);
    font-size: 1.8rem;
    text-transform: uppercase;
    margin-bottom: 0.3em;
  }
  .message {
    font-size: 1.2rem;
    text-align: center;
  }
  .close-btn {
    position: absolute;
    top: 0.3em;
    left: 0.3em;

    color: var(--white);
    font-size: 2rem;
    display: flex;
    cursor: pointer;
  }
`;
