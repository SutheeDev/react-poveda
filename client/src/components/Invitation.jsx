import { Form } from "../components";
import styled from "styled-components";

const Invitation = ({ title, info }) => {
  return (
    <Wrapper>
      <div className="invite-container">
        <div className="form-info-container">
          <h1 className="title">{title}</h1>
          <p className="info">{info}</p>
        </div>

        <div className="form-container">
          <Form />
        </div>
      </div>
    </Wrapper>
  );
};
export default Invitation;

const Wrapper = styled.section`
  background-color: var(--green-1);
  color: var(--white);
  padding: 6em var(--side-contain-sm) 3em var(--side-contain-sm);

  .info {
    font-size: 0.85rem;
    line-height: 1.8;
    letter-spacing: 2px;
    margin: 2em 0 2em 0;
  }

  @media screen and (min-width: 950px) {
    padding: 6em 0 3em 0;
    .invite-container {
      display: flex;
      align-items: flex-start;

      padding: 0 var(--side-contain-950);
      max-width: var(--side-contain-max);
      margin: 0 auto;
    }
    .form-info-container,
    .form-container {
      width: 50%;
    }
    .form-info-container {
      padding-right: var(--inner-padding-950);
    }
    .form-container {
      padding-left: var(--inner-padding-950);
    }
    .title {
      font-size: 2.5rem;
    }
  }
  @media screen and (min-width: 1200px) {
    .info {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1500px) {
    .form-info-container {
      padding-right: var(--inner-padding-max);
    }
    .form-container {
      padding-left: var(--inner-padding-max);
    }
  }
`;
