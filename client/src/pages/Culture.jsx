import styled from "styled-components";
import { Hero } from "../components";
import imgUrl from "../assets/images/HERO_05_CULTURE.jpg";

const Culture = () => {
  return (
    <Wrapper>
      <Hero smText={`it's time to`} bgText="fell bali" imgUrl={imgUrl} />
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
