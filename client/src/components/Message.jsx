import styled from "styled-components";

const Message = ({ title, paragraph }) => {
  return (
    <Wrapper>
      <div className="container">
        <h1>{title}</h1>
        <p>{paragraph}</p>
      </div>
    </Wrapper>
  );
};
export default Message;

const Wrapper = styled.section``;
