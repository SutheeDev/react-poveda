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

const Adventure = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time for`} bgText="action" imgUrl={imgUrl} />

      <Message
        title="experience heaven"
        paragraph={`If you want to find as many adventures as you can find, Bali is the place for you. Hop on a scooter, surf the waves or explore the beautiful nature full of exciting wildlife - wherever you go, the island will offer a lot of exciting opportunities for your adventurous heart.`}
      />
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
