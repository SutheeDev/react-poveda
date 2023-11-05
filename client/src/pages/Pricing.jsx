import styled from "styled-components";
import {
  Hero,
  Message,
  Package,
  Footer,
  Testimonial,
  Invitation,
} from "../components";
import imgUrl from "../assets/images/HERO_07_PRICING.jpg";

// Delete later
import imgAr1 from "../assets/images/AR_HOME_01.jpg";

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
        bgColor="var(--green-3)"
        txColor="var(--white)"
        btnText="learn more"
        path="/relax"
      />

      <Package
        title="adventure in bali"
        info={`Explore the tropical nature, hop on a scooter to drive around the island or choose other activities, such as water sports, to make your holiday memorable.`}
        price="569"
        bgColor="var(--grey)"
        txColor="var(--green-2)"
        btnText="learn more"
        path="/adventure"
      />

      <Package
        title="feel the culture"
        info={`The Balinese culture is ready for the curious – ancient monuments, local festivals and exotic food make you leave the island with deeper knowledge of its lifestyle.`}
        price="514"
        bgColor="var(--green-3)"
        txColor="var(--white)"
        btnText="learn more"
        path="/culture"
      />

      <Package
        title="personal adventure"
        info={`Looking for something a bit more out there? No problem. We are here to help you plan your special experience and find the best solutions on how to make your wishes come true. Contact us to make your dream vacation come true.`}
        price="611"
        bgColor="var(--grey)"
        txColor="var(--green-2)"
        btnText="learn more"
      />

      <Testimonial bgColor="var(--green-3)" />

      <Invitation
        title="come visit us"
        info={`Bali is an amazing place to immerse yourself into a rich culture, which can surprise you with its history, monuments, celebrations and, of course, food. Contact us so we can help you organize a memorable stay at one of the most magical places on the planet.`}
      />

      <Footer />
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
