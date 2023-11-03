import styled from "styled-components";
import { Hero, Message, Gallery, Invitation, Footer } from "../components";
import imgUrl from "../assets/images/HERO_03_VISIT.jpg";
import imgLi1 from "../assets/images/GL_LICENSE_01.jpg";
import imgLi2 from "../assets/images/GL_LICENSE_02.jpg";
import imgLi3 from "../assets/images/GL_LICENSE_03.jpg";

const Visit = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="visit bali" imgUrl={imgUrl} />

      <Message
        title="let us organize your trip"
        paragraph={`Need a place to get away? There is no better corner in the world to hide from the dull everyday than the magical Bali. Relax on the picturesque beaches, visit numerous spas and reside in the breathtaking resorts this location has to offer – and forget all of your worries.`}
      />

      <Gallery
        title="license to live"
        subTitle1="adventure"
        subTitle2="culture"
        subTitle3="relaxation"
        btnText1="explore bali"
        btnText2="understand bali"
        btnText3="relax in bali"
        img1={imgLi1}
        img2={imgLi2}
        img3={imgLi3}
        path1="/adventure"
        path2="/culture"
        path3="/relax"
        bgColor="var(--light-grey)"
        ig={false}
      />

      <Invitation
        title="come visit us"
        info={`We’ve been obsessed with exploring this island for several years - let us show the best we’ve found! Contact us so we can help you organize a memorable stay at one of the most magical places on the planet!`}
      />

      <Footer />
    </Wrapper>
  );
};
export default Visit;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
