import styled from "styled-components";

const AboutUs = () => {
  return (
    <Wrapper>
      <h1>About us</h1>
    </Wrapper>
  );
};
export default AboutUs;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
