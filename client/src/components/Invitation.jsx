import { Form } from "../components";
import styled from "styled-components";

const Invitation = ({ title, info, contact }) => {
  return (
    <Wrapper>
      <div className="invite-container" id="contact">
        {contact ? (
          <div className="contact-info-container">
            <div className="headquarters">
              <h1 className="title">headquarters</h1>
              <p className="contact-info">H3VR+RFH, Sangketan, Penebel,</p>
              <p>Tabanan Regency, Bali 82152, Indonesia</p>
            </div>
            <div className="contact">
              <h1 className="title">contacts</h1>
              <p className="contact-info">email@example.com</p>
              <p>123-456-7890</p>
            </div>
          </div>
        ) : (
          <div className="form-info-container">
            <h1 className="title">{title}</h1>
            <p className="info">{info}</p>
          </div>
        )}

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
  .headquarters p,
  .contact p,
  .info {
    font-size: 0.85rem;
    line-height: 1.8;
    letter-spacing: 2px;
  }
  .headquarters,
  .contact {
    margin-bottom: 2em;
  }
  .info {
    margin: 2em 0 2em 0;
  }
  .contact-info {
    margin-top: 2em;
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
    .contact-info-container,
    .form-info-container,
    .form-container {
      width: 50%;
    }
    .contact-info-container,
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
    .info,
    .headquarters p,
    .contact p {
      font-size: 1rem;
    }
  }
  @media screen and (min-width: 1500px) {
    .contact-info-container,
    .form-info-container {
      padding-right: var(--inner-padding-max);
    }
    .form-container {
      padding-left: var(--inner-padding-max);
    }
  }
`;
