import styled from "styled-components";
import { Button } from "../components";
import { BiX } from "react-icons/bi";
import { useState } from "react";

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  return (
    <Wrapper>
      <div className="alert">
        <div className="close-btn">
          <BiX />
        </div>
      </div>
      <form action="submit" className="form" onSubmit={handleSubmit}>
        <div className="form-rows">
          <label htmlFor="name" className="label">
            name *
          </label>
          <input
            type="text"
            name="name"
            id="name"
            value={name}
            placeholder="your name"
            className="input"
            onChange={(e) => setName(e.target.value)}
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
            value={lastName}
            placeholder="your last name"
            className="input"
            onChange={(e) => setLastName(e.target.value)}
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
            value={email}
            placeholder="your email address"
            className="input"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-rows message-container">
          <label htmlFor="message" className="label">
            message *
          </label>
          <textarea
            name="message"
            id="message"
            value={message}
            cols="30"
            rows="10"
            placeholder="enter your message"
            className="input"
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>
        <Button
          text="submit"
          type="submit"
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
    background-color: var(--green-4);
    position: relative;
    z-index: -1;
    transform: translateY(-110%);

    transition: var(--global-transition);
  }
  .alert.display {
    z-index: 1;
    transform: translateY(0%);
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
