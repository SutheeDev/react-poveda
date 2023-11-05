import styled from "styled-components";
import {
  Hero,
  Message,
  Article,
  Testimonial,
  Gallery,
  Invitation,
  Footer,
} from "../components";
import imgUrl from "../assets/images/HERO_02_ABOUTUS.jpg";
import imgAr1 from "../assets/images/AR_ABOUT_01.jpg";
import imgAr2 from "../assets/images/AR_ABOUT_02.jpg";
import imgIg1 from "../assets/images/GL_IG_01.jpg";
import imgIg2 from "../assets/images/GL_IG_02.jpg";
import imgIg3 from "../assets/images/GL_IG_03.jpg";

const AboutUs = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="know us" imgUrl={imgUrl} />

      <Message
        title="in love with bali"
        paragraph={`We are a couple of nomads who used to explore the globe. The day we stepped our foot on Balinese ground one thing was clear - we fell in love. We kept coming back every few months and understood that this is a love affair for a lifetime. We fully moved here in 2018 and been exploring the island ever since. We’re excited to share what we’ve found and show you this beautiful corner of the world.`}
      />

      <Article
        title="jessie russell"
        pFirst={` “I’ve been traveling my whole life. My parents had a burning passion for exploring which I have inherited. It's no surprise that I was destined to meet Miller on my vacation on Hawaii. Since then we’ve been sight-seeing together up until we’ve fell in love with Bali.” `}
        bgColor="var(--green-2)"
        txColor="var(--white)"
        imgLeft={true}
        img={imgAr1}
      />

      <Article
        title="miller donovan"
        pFirst={` “I am inspired by nature and diversity of planet Earth. I'm a photographer and take pictures wherever I go - same goes for my beloved Bali. I am lucky to share my time with amazing Jessie, who is the best companion to explore this island with. Together, we've turned every stone in this place and are ready to share our finding with you.” `}
        bgColor="var(--light-grey)"
        txColor="var(--green-2)"
        imgLeft={false}
        img={imgAr2}
      />

      <Testimonial bgColor="var(--green-1)" />

      <Gallery
        title="follow us on instagram"
        img1={imgIg1}
        img2={imgIg2}
        img3={imgIg3}
        bgColor="var(--grey)"
        mainBtnText="@poveda_travel"
        mainPath="https://www.instagram.com/"
        ig={true}
      />

      <Invitation
        title="come visit us"
        info={`We’ve been obsessed with exploring this island for several years - let us show the best we’ve found! Contact us so we can help you organize a memorable stay at one of the most magical places on the planet!`}
      />

      <Footer />
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
