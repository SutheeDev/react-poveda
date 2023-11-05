import styled from "styled-components";
import {
  Hero,
  Message,
  Article,
  Package,
  Invitation,
  Footer,
} from "../components";
import imgUrl from "../assets/images/HERO_05_CULTURE.jpg";
import imgAr1 from "../assets/images/AR_CUL_01.jpg";
import imgAr2 from "../assets/images/AR_CUL_02.jpg";
import imgAr3 from "../assets/images/AR_CUL_03.jpg";

const Culture = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="fell bali" imgUrl={imgUrl} />

      <Message
        title="dive into a lifestyle"
        paragraph={`Need a place to get away? There is no better corner in the world to hide from the dull everyday than the magical Bali. Relax on the picturesque beaches, visit numerous spas and reside in the breathtaking resorts this location has to offer – and forget all of your worries.`}
      />

      <Article
        title="colorful culture"
        pFirst={` The culture of Bali is as colourful as it can be. Various celebrations, bright clothes, ancient stories and a diverse local lifestyle is something you can experience during your stay. Immerse yourself with the life of Bali and its residents. `}
        bgColor="var(--green-3)"
        txColor="var(--white)"
        imgLeft={true}
        img={imgAr1}
      />

      <Article
        title="ancient monuments"
        pFirst={` Bali is full of ancient monuments that will take your breath away. Gazebos on the beaches and mystical temples in the forests are just a few of the places to visit for the people thristy of seeing inspiring architecture with deep history. `}
        bgColor="var(--light-grey)"
        txColor="var(--green-2)"
        imgLeft={false}
        img={imgAr2}
      />

      <Article
        title="exotic food"
        pFirst={`Hungry for something new? Your search is over. The fresh and exciting cuisine of Bali will make your taste buds happy for weeks to come. Be it street food or fancy local restaurants, we are sure you will find something new to drool over after your stay is over.`}
        bgColor="var(--grey)"
        txColor="var(--green-2)"
        imgLeft={true}
        img={imgAr3}
      />

      <Package
        title="feel the culture"
        info={`The culture in Bali is colourful and ready to be explored by the curious. Contact us so we can make sure that you don't miss anything crucial during your trip.`}
        price="514"
        bgColor="var(--green-3)"
        txColor="var(--white)"
        btnText="pricing"
      />

      <Invitation
        title="come visit us"
        info={`Bali is an amazing place to immerse yourself into a rich culture, which can surprise you with its history, monuments, celebrations and, of course, food. Contact us so we can help you organize a memorable stay at one of the most magical places on the planet.`}
      />

      <Footer />
    </Wrapper>
  );
};
export default Culture;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
