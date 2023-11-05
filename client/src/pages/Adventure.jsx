import styled from "styled-components";
import {
  Hero,
  Message,
  Article,
  Package,
  Invitation,
  Footer,
} from "../components";
import imgUrl from "../assets/images/HERO_04_ADVENTURE.jpg";
import imgAr1 from "../assets/images/AR_ADV_01.jpg";
import imgAr2 from "../assets/images/AR_ADV_02.jpg";
import imgAr3 from "../assets/images/AR_ADV_03.jpg";
import imgAr4 from "../assets/images/AR_ADV_04.jpg";

const Adventure = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time for`} bgText="action" imgUrl={imgUrl} />

      <Message
        title="experience heaven"
        paragraph={`If you want to find as many adventures as you can find, Bali is the place for you. Hop on a scooter, surf the waves or explore the beautiful nature full of exciting wildlife - wherever you go, the island will offer a lot of exciting opportunities for your adventurous heart.`}
      />

      <Article
        title="road full of sights"
        pFirst={` Bali is a palace full of things to experience - ancient architecture, beautiful beaches and amazing nature. Whether you have limited time or love the wind in your hair, there is a way to see it all. A scooter will definitely become one of your best friends during your stay in the picturesque Bali. `}
        bgColor="var(--green-2)"
        txColor="var(--white)"
        imgLeft={true}
        img={imgAr1}
      />

      <Article
        title="playful waves"
        pFirst={` Bali is located between the Indian and Pacific Oceans, meaning there are plenty of waves to be conquered by the brave ones. Surfing, scuba-diving, relaxing on a yacht - you name it! Tons of water-sports await the people who are interested in an active leisure time by the sea. `}
        bgColor="var(--light-grey)"
        txColor="var(--green-2)"
        imgLeft={false}
        img={imgAr2}
      />

      <Article
        title="impressive nature"
        pFirst={` There's a reason Bali is on the bucket list of many. Bali's central mountains include several peaks over 2,000 metres and active volcanoes for lovers of heights. The island is full of beautiful beaches, which are surrounded by the coral reefs as well as rich forests. If you are in search of breathtaking views - you got it! `}
        bgColor="var(--grey)"
        txColor="var(--green-2)"
        imgLeft={true}
        img={imgAr3}
      />

      <Article
        title="friendly wildlife"
        pFirst={` Have you ever given a fist bump to a monkey? If not, it is time to do it - there is plenty of friendly monkeys ready to socialize for a treat. Bali is full of amazing wildlife, which can be explored by people in love with nature. `}
        bgColor="var(--green-2)"
        txColor="var(--white)"
        imgLeft={false}
        img={imgAr4}
      />

      <Package
        title="adventure in bali"
        info={`If you want to choose active activities to make your holiday memorable, we can help you with that. Contact us to organise your trip.`}
        price="569"
        bgColor="var(--grey)"
        txColor="var(--green-2)"
        btnText="contact"
      />

      <Invitation
        title="come visit us"
        info={`We’ve been obsessed with exploring this island for several years - let us show the best we’ve found! Contact us so we can help you organize a memorable stay at one of the most magical places on the planet!`}
      />

      <Footer />
    </Wrapper>
  );
};
export default Adventure;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
