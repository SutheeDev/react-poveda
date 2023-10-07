import styled from "styled-components";
import { Hero } from "../components";

const AboutUs = () => {
  return (
    <Wrapper>
      <Hero />
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
