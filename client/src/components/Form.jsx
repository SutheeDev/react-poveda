import styled from "styled-components";
import { Button } from "../components";

const Form = () => {
  return (
    <Wrapper>
      <div className="alert"></div>
      <form action="submit" className="form">
        <div className="form-rows">
          <label htmlFor="name" className="label">
            name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            // value="value"
            placeholder="your name"
            className="input"
          />
        </div>
        <div className="form-rows">
          <label htmlFor="lastname" className="label">
            last name
          </label>
          <input
            type="text"
            name="lastname"
            id="lastname"
            // value="value"
            placeholder="your last name"
            className="input"
          />
        </div>
        <div className="form-rows">
          <label htmlFor="email" className="label">
            email address *
          </label>
          <input
            type="email"
            name="email"
            id="email"
            // value="value"
            placeholder="your email address"
            className="input"
          />
        </div>
        <div className="form-rows message-container">
          <label htmlFor="message" className="label">
            message *
          </label>
          <textarea
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="enter your message"
            className="input"
          />
        </div>
        <Button
          text="submit"
          type="submit"
          path=""
          bgColor="transparent"
          bdColor="var(--white)"
          txColor="var(--white)"
          bgColorHover="var(--white)"
          bdColorHover="var(--white)"
          txColorHover="var(--green-1)"
        />
      </form>
    </Wrapper>
  );
};
export default Form;

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  overflow: hidden;
  .alert,
  .form {
    grid-area: 1/1;
  }
  .alert {
    width: 100%;
    height: 100%;
    border-radius: var(--border-radius);
    background-color: red;
    z-index: -1;
    transform: translateY(-110%);

    transition: var(--global-transition);
  }
  .alert.display {
    z-index: 1;
    transform: translateY(0%);
  }
  .form {
    width: 100%;
    padding-bottom: 3em;
  }
  .form-rows {
    display: flex;
    flex-direction: column;
  }
  .label {
    text-transform: capitalize;
    margin-bottom: 0.5em;
  }
  .input {
    outline: none;
    padding: 1em;
    margin-bottom: 2em;
    border-radius: var(--border-radius);
    border: none;
    background-color: var(--grey);
  }
  .label,
  .input::placeholder {
    line-height: 1.8;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
  .input::placeholder {
    font-family: var(--font-2);
    font-size: 0.85rem;
    color: var(--white);
  }
  .message-container {
    margin-bottom: 1em;
  }
`;
