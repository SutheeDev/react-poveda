import styled from "styled-components";
import {
  Hero,
  Message,
  Article,
  Package,
  Invitation,
  Footer,
} from "../components";
import imgUrl from "../assets/images/HERO_06_RELAX.jpg";
import imgAr1 from "../assets/images/AR_RELAX_01.jpg";
import imgAr2 from "../assets/images/AR_RELAX_02.jpg";
import imgAr3 from "../assets/images/AR_RELAX_03.jpg";

const Relax = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="relax in bali" imgUrl={imgUrl} />

      <Message
        title="forget your worries"
        paragraph={`Need a place to get away? There is no better corner in the world to hide from the dull everyday than the magical Bali. Relax on the picturesque beaches, visit numerous spas and reside in the breathtaking resorts this location has to offer – and forget all of your worries.`}
      />

      <Article
        title="beautiful resorts"
        pFirst={` Do you want to wake up with the view of perfect sandy beaches just 5 minutes away from having your feet washed by the clear waves of the blue sea? There is plenty of marvelous resorts to choose from. `}
        bgColor="var(--green-3)"
        txColor="var(--white)"
        imgLeft={true}
        img={imgAr1}
      />

      <Article
        title="amazing beaches"
        pFirst={`One of the things Bali is known for are its amazing sandy beaches, where every view is worthy of a picture. So sit back, relax on the beach or inflatable boat and soak in all the sunshine this land has been blessed with.`}
        bgColor="var(--light-grey)"
        txColor="var(--green-2)"
        imgLeft={false}
        img={imgAr2}
      />

      <Article
        title="mindfulness practices"
        pFirst={`The inspiring nature of Bali and the magical essence of its culture creates a unique environment for everyone who wants to practice being mindful and open their hearts up for the colorful experiences this life has to offer.`}
        bgColor="var(--grey)"
        txColor="var(--green-2)"
        imgLeft={true}
        img={imgAr3}
      />

      <Package
        title="relax in bali"
        info={`Amazing, all-inclusive resorts, beautiful beaches and mindfulness sessions - these are just a few of the things that will help you relax and enjoy your holiday.`}
        price="420"
        bgColor="var(--green-3)"
        txColor="var(--white)"
        btnText="contact"
      />

      <Invitation
        title="come visit us"
        info={`Bali is an amazing place to immerse yourself into a rich culture, which can surprise you with its history, monuments, celebrations and, of course, food. Contact us so we can help you organize a memorable stay at one of the most magical places on the planet.`}
      />

      <Footer />
    </Wrapper>
  );
};
export default Relax;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
