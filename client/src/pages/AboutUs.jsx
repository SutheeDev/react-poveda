import styled from "styled-components";
import { Hero, Message } from "../components";
import imgUrl from "../assets/images/HERO_02_ABOUTUS.jpg";

const AboutUs = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="know us" imgUrl={imgUrl} />

      <Message
        title="in love with bali"
        paragraph={`We are a couple of nomads who used to explore the globe. The day we stepped our foot on Balinese ground one thing was clear - we fell in love. We kept coming back every few months and understood that this is a love affair for a lifetime. We fully moved here in 2018 and been exploring the island ever since. We’re excited to share what we’ve found and show you this beautiful corner of the world.`}
      />
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
