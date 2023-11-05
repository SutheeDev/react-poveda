import styled from "styled-components";
import { Hero, Message, Invitation, Gallery, Footer } from "../components";
import imgUrl from "../assets/images/HERO_08_CONTACT.jpg";
import imgIg1 from "../assets/images/GL_IG_01.jpg";
import imgIg2 from "../assets/images/GL_IG_02.jpg";
import imgIg3 from "../assets/images/GL_IG_03.jpg";

const Contact = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="contact us" imgUrl={imgUrl} />

      <Message
        title="come visit"
        paragraph={`We’ve been obsessed with exploring this island for several years – let us show you the best spots we’ve found! From breathtaking locations to colorful culture and relaxing mood, we can help you organize a memorable stay in one of the most magical places on the planet.`}
      />

      <Invitation contact={true} />

      <Gallery
        title="follow us on instagram"
        img1={imgIg1}
        img2={imgIg2}
        img3={imgIg3}
        bgColor="var(--light-grey)"
        mainBtnText="@poveda_travel"
        mainPath="https://www.instagram.com/"
        ig={true}
      />

      <Footer />
    </Wrapper>
  );
};
export default Contact;

const Wrapper = styled.main`
  padding-top: 75px;
  @media screen and (min-width: 950px) {
    padding-top: 0;
  }
`;
