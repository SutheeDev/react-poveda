import { Form } from "../components";
import styled from "styled-components";

const Invitation = () => {
  return (
    <Wrapper>
      <div className="invite-container">
        <div className="form-info-container">
          <h1 className="title">title</h1>
          <p className="info">
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

const Wrapper = styled.section`
  background-color: var(--green-1);
  color: var(--white);
  padding: 6em var(--side-contain-sm);

  .info {
    font-size: 0.85rem;
    line-height: 1.8;
    letter-spacing: 2px;
    /* margin-top: 2em; */
  }

  @media screen and (min-width: 950px) {
    padding: 6em 0;
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

    .title {
      font-size: 2.5rem;
    }
    .info {
      /* max-width: 850px; */
      /* margin: 2em auto; */
    }
  }
  @media screen and (min-width: 1200px) {
    .info {
      font-size: 1rem;
    }
  }
`;
