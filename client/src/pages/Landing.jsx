import styled from "styled-components";
import { Hero, Article, Gallery } from "../components";
import imgUrl from "../assets/images/HERO_01_LANDING.jpg";
import imgAr1 from "../assets/images/AR_HOME_01.jpg";
import imgAr2 from "../assets/images/AR_HOME_02.jpg";
import imgLi1 from "../assets/images/GL_LICENSE_01.jpg";
import imgLi2 from "../assets/images/GL_LICENSE_02.jpg";
import imgLi3 from "../assets/images/GL_LICENSE_03.jpg";

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
        bgColor="var(--grey)"
      />

      <Article
        title="a place to be"
        pFirst={`It's no coincidence that Bali is one of the top destinations for the Instagram nation. The breathtaking nature, the endless beaches, exotic temples and friendly locals make the island a place for everyone.`}
        pSecond={`We know Bali better than the backs of our hands, meaning that whether you want to plan a surfing holiday or find inner peace on a meditation retreat, we know exactly how to start planning your dream trip to Bali.`}
        bgColor="var(--light-grey)"
        txColor="var(--green-2)"
        btnHoverColor="var(--white)"
        btnText="learn more"
        imgLeft={true}
        img={imgAr1}
      />

      <Article
        title="in love with bali"
        pFirst={`We are a couple of nomads who used to explore the globe. The day we stepped our foot on Balinese ground one thing was clear - we fell in love. We kept coming back every few months and understood that this is a love affair for a lifetime. We fully moved here in 2018 and been exploring the island ever since. We’re excited to share what we’ve found and show you this beautiful corner of the world.`}
        bgColor="var(--green-2)"
        txColor="var(--white)"
        btnHoverColor="var(--green-2)"
        btnText="more about us"
        imgLeft={false}
        img={imgAr2}
      />

      <Gallery
        title="follow us on instagram"
        img1={imgLi1}
        img2={imgLi2}
        img3={imgLi3}
        bgColor="var(--grey)"
        mainBtnText="@poveda_travel"
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
