import styled from "styled-components";

const Message = ({ title, paragraph }) => {
  return (
    <Wrapper>
      <div className="container">
        <h1 className="title">{title}</h1>
        <p className="paragraph">{paragraph}</p>
      </div>
    </Wrapper>
  );
};
export default Message;

const Wrapper = styled.section`
  background-color: var(--grey);
  padding: 6em var(--side-contain-sm);
  text-align: center;
  .title,
  .paragraph {
    color: var(--green-2);
  }
  .paragraph {
    font-size: 0.85rem;
    line-height: 1.8;
    letter-spacing: 2px;
    margin-top: 2em;
  }
  @media screen and (min-width: 950px) {
    .title {
      font-size: 2.5rem;
    }
    .paragraph {
      max-width: 850px;
      margin: 2em auto;
    }
  }
  @media screen and (min-width: 1200px) {
    .paragraph {
      font-size: 1rem;
    }
  }
`;
