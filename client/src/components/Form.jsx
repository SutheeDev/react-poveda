import styled from "styled-components";
import { Button } from "../components";
import { useState, useReducer } from "react";
import { Alert } from "../components";
import axios from "axios";

const initialState = {
  msg: "",
  alertType: "",
  showAlert: false,
};

const reducer = (state, action) => {
  if (action.type === "ALERT_ERROR") {
    return {
      ...state,
      msg: action.payload.msg,
      alertType: "error",
      showAlert: true,
    };
  } else if (action.type === "ALERT_SUCCESS") {
    return {
      ...state,
      msg: "We've gotten your message. Thank you so much for reaching out!",
      alertType: "success",
      showAlert: true,
    };
  } else if (action.type === "ALERT_CLOSE") {
    return {
      ...state,
      msg: "",
      alertType: "",
      showAlert: false,
    };
  }
};

const Form = () => {
  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [state, dispatch] = useReducer(reducer, initialState);

  const resetState = () => {
    setName("");
    setLastName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/v1/email/", {
        name,
        lastName,
        email,
        message,
      });
      dispatch({ type: "ALERT_SUCCESS" });
      setTimeout(() => {
        resetState();
        dispatch({ type: "ALERT_CLOSE" });
      }, 2300);
    } catch (error) {
      dispatch({
        type: "ALERT_ERROR",
        payload: {
          msg: error.response.data.msg,
        },
      });
      setTimeout(() => {
        dispatch({ type: "ALERT_CLOSE" });
      }, 2300);
    }
  };

  return (
    <Wrapper>
      <div
        className={
          state.showAlert
            ? `alert display ${state.alertType}`
            : `alert ${state.alertType}`
        }
      >
        <Alert alertType={state.alertType} msg={state.msg} />
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
  border-radius: var(--border-radius);
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

    transition: var(--alert-transition);
  }
  .alert.display {
    z-index: 1;
    transform: translateY(0%);
  }
  .alert.error {
    background-color: var(--alert-warning);
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
