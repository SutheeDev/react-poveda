import styled from "styled-components";

const Landing = () => {
  return (
    <Wrapper>
      <h1>Landing</h1>
    </Wrapper>
  );
};
export default Landing;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
