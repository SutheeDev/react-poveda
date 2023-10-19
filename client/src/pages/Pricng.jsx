import styled from "styled-components";
import { Hero, Message, Package } from "../components";
import imgUrl from "../assets/images/HERO_07_PRICING.jpg";

const Pricing = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="choose bali" imgUrl={imgUrl} />

      <Message
        title="what we can offer"
        paragraph={`Need a place to get away? There is no better corner in the world to hide from the dull everyday than the magical Bali. Relax on the picturesque beaches, visit numerous spas and reside in the breathtaking resorts this location has to offer – and forget all of your worries.`}
      />

      <Package
        title="relax in bali"
        info={`Amazing, all-inclusive resorts, beautiful beaches and mindfulness sessions - these are just a few of the things that will help you relax and enjoy your holiday.`}
        price="420"
        bgColor="var(--green-2)"
        txColor="var(--white)"
      />
    </Wrapper>
  );
};
export default Pricing;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
