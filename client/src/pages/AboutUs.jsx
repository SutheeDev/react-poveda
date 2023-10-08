import styled from "styled-components";
import { Hero } from "../components";
import imgUrl from "../assets/images/HERO_02_ABOUTUS.jpg";

const AboutUs = () => {
  return (
    <Wrapper>
      <Hero text="know us" imgUrl={imgUrl} />
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
