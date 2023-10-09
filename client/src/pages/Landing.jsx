import styled from "styled-components";
import { Hero } from "../components";
import imgUrl from "../assets/images/HERO_01_LANDING.jpg";

const Landing = () => {
  const height = "225px";

  return (
    <Wrapper>
      <Hero
        smText={`it's time to`}
        bgText="visit bali"
        imgUrl={imgUrl}
        height={height}
        btn="our offers"
        paragraph={`Crave new adventures, mystical experiences and relaxing beaches? You need to visit Bali. We make sure that you’ll get an experience you'll never forget.`}
      />
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
