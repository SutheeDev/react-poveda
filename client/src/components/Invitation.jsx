import { Form } from "../components";
import styled from "styled-components";

const Invitation = () => {
  return (
    <Wrapper>
      <div className="invite-container">
        <div className="form-info-container">
          <h1>title</h1>
          <p>
            Bali is an amazing place to immerse yourself into a rich culture,
            which can surprise you with its history, monuments, celebrations
            and, of course, food. Contact us so we can help you organize a
            memorable stay at one of the most magical places on the planet.
          </p>
        </div>

        <div className="form-container">
          <Form />
        </div>
      </div>
    </Wrapper>
  );
};
export default Invitation;

const Wrapper = styled.section``;
