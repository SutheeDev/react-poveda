import { Button } from "../components";
import styled from "styled-components";

const Error = () => {
  return (
    <Wrapper>
      <div className="error-container">
        <h1 className="error-code">404</h1>
        <h2 className="error-title">page not found</h2>
        <p className="error-msg">
          We couldn't find the page you were looking for!
        </p>
        <Button
          text="home"
          path="/"
          bgColor="transparent"
          bdColor="var(--white)"
          txColor="var(--white)"
          bgColorHover="var(--white)"
          bdColorHover="var(--white)"
          txColorHover="var(--green-2)"
        />
      </div>
    </Wrapper>
  );
};
export default Error;

const Wrapper = styled.main`
  height: 100vh;
  background-color: var(--green-1);
  color: var(--white);
  .error-container {
    height: 100vh;
    padding: 0 1em;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .error-code {
    font-size: 9rem;
    color: var(--alert-warning);
    line-height: 0.9;
  }
  .error-title {
    text-transform: capitalize;
    font-size: 2rem;
  }
  .error-msg {
    font-family: var(--bodyFont);
    margin: 0.7em 0 3em 0;
  }
  @media screen and (min-width: 450px) {
    .error-code {
      font-size: 11rem;
      line-height: 0.7;
    }
    .error-title {
      font-size: 3rem;
    }
    .error-msg {
      margin: 0.7em 0 4em 0;
    }
  }
  @media screen and (min-width: 850px) {
    .header {
      padding: 60px 0 0 0;
    }
    .error-code {
      font-size: 17rem;
      line-height: 0.7;
    }
    .error-title {
      font-size: 3.5rem;
    }
  }
`;
