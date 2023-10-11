import styled from "styled-components";
import { Hero, Article } from "../components";
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
      <Article
        title="place to be"
        pFirst={`It's no coincidence that Bali is one of the top destinations for the Instagram nation. The breathtaking nature, the endless beaches, exotic temples and friendly locals make the island a place for everyone.`}
        pSecond={`We know Bali better than the backs of our hands, meaning that whether you want to plan a surfing holiday or find inner peace on a meditation retreat, we know exactly how to start planning your dream trip to Bali.`}
        bgColor="var(--light-grey)"
        txColor="var(--green-1)"
        btnHoverColor=""
        imgLeft="true"
        img=""
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
